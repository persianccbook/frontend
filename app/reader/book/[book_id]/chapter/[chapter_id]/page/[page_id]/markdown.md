<!--
Notes for maintaining this document:

*   Update the link for `cm-html` once in a while
-->

# react-markdown

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

React component to render markdown.

## Feature highlights

* [x] **[safe][section-security] by default**
  (no `dangerouslySetInnerHTML` or XSS attacks)
* [x] **[components][section-components]**
  (pass your own component to use instead of `<h2>` for `## hi`)
* [x] **[plugins][section-plugins]**
  (many plugins you can pick and choose from)
* [x] **[compliant][section-syntax]**
  (100% to CommonMark, 100% to GFM with a plugin)

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`Markdown`](#markdown)
  * [`defaultUrlTransform(url)`](#defaulturltransformurl)
  * [`AllowElement`](#allowelement)
  * [`Components`](#components)
  * [`ExtraProps`](#extraprops)
  * [`Options`](#options)
  * [`UrlTransform`](#urltransform)
* [Examples](#examples)
  * [Use a plugin](#use-a-plugin)
  * [Use a plugin with options](#use-a-plugin-with-options)
  * [Use custom components (syntax highlight)](#use-custom-components-syntax-highlight)
  * [Use remark and rehype plugins (math)](#use-remark-and-rehype-plugins-math)
* [Plugins](#plugins)
* [Syntax](#syntax)
* [Types](#types)
* [Compatibility](#compatibility)
* [Architecture](#architecture)
* [Appendix A: HTML in markdown](#appendix-a-html-in-markdown)
* [Appendix B: Components](#appendix-b-components)
* [Appendix C: line endings in markdown (and JSX)](#appendix-c-line-endings-in-markdown-and-jsx)
* [Security](#security)
* [Related](#related)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This package is a [React][] component that can be given a string of markdown
that it’ll safely render to React elements.
You can pass plugins to change how markdown is transformed and pass components
that will be used instead of normal HTML elements.

* to learn markdown, see this [cheatsheet and tutorial][commonmark-help]
* to try out `react-markdown`, see [our demo][demo]

## When should I use this?

There are other ways to use markdown in React out there so why use this one?
The three main reasons are that they often rely on `dangerouslySetInnerHTML`,
have bugs with how they handle markdown, or don’t let you swap elements for
components.
`react-markdown` builds a virtual DOM, so React only replaces what changed,
from a syntax tree.
That’s supported because we use [unified][], specifically [remark][] for
markdown and [rehype][] for HTML, which are popular tools to transform content
with plugins.

This package focusses on making it easy for beginners to safely use markdown in
React.
When you’re familiar with unified, you can use a modern hooks based alternative
[`react-remark`][react-remark] or [`rehype-react`][rehype-react] manually.
If you instead want to use JavaScript and JSX *inside* markdown files, use
[MDX][].

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install react-markdown
```

In Deno with [`esm.sh`][esmsh]:

```js
import Markdown from 'https://esm.sh/react-markdown@9'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import Markdown from 'https://esm.sh/react-markdown@9?bundle'
</script>
```

## Use

A basic hello world:

```jsx
import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

const markdown = '# Hi, *Pluto*!'

createRoot(document.body).render(<Markdown>{markdown}</Markdown>)
```

<details>
<summary>Show equivalent JSX</summary>

```jsx
<h1>
  Hi, <em>Pluto</em>!
</h1>
```

</details>

Here is an example that shows how to use a plugin ([`remark-gfm`][remark-gfm],
which adds support for footnotes, strikethrough, tables, tasklists and URLs
directly):

```jsx
import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `Just a link: www.nasa.gov.`

createRoot(document.body).render(
  <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
)
```

<details>
<summary>Show equivalent JSX</summary>

```jsx
<p>
  Just a link: <a href="http://www.nasa.gov">www.nasa.gov</a>.
</p>
```

</details>

## API

This package exports the following identifier:
[`defaultUrlTransform`][api-default-url-transform].
The default export is [`Markdown`][api-markdown].

### `Markdown`

Component to render markdown.

###### Parameters

* `options` ([`Options`][api-options])
  — props

###### Returns

React element (`JSX.Element`).

### `defaultUrlTransform(url)`

Make a URL safe.

###### Parameters

* `url` (`string`)
  — URL

###### Returns

Safe URL (`string`).

### `AllowElement`

Filter elements (TypeScript type).

###### Parameters

* `node` ([`Element` from `hast`][hast-element])
  — element to check
* `index` (`number | undefined`)
  — index of `element` in `parent`
* `parent` ([`Node` from `hast`][hast-node])
  — parent of `element`

###### Returns

Whether to allow `element` (`boolean`, optional).

### `Components`

Map tag names to components (TypeScript type).

###### Type

```ts
import type {Element} from 'hast'

type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:
    // Class component:
    | (new (props: JSX.IntrinsicElements[TagName] & ExtraProps) => JSX.ElementClass)
    // Function component:
    | ((props: JSX.IntrinsicElements[TagName] & ExtraProps) => JSX.Element | string | null | undefined)
    // Tag name:
    | keyof JSX.IntrinsicElements
}>
```