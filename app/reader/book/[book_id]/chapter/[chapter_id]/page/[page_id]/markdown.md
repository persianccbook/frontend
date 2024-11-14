<!-- یادداشت‌های نگهداری این سند:

*   به روزرسانی پیوند برای `cm-html` هر از چند گاهی
-->

# react-markdown

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

کامپوننت React برای رندر کردن markdown.

## نکات برجسته

* [x] **[ایمن][section-security] به طور پیش‌فرض**
  (بدون `dangerouslySetInnerHTML` یا حملات XSS)
* [x] **[کامپوننت‌ها][section-components]**
  (پاس دادن کامپوننت خود برای استفاده به جای `<h2>` برای `## hi`)
* [x] **[پلاگین‌ها][section-plugins]**
  (پلاگین‌های زیادی که می‌توانید انتخاب کنید)
* [x] **[همراه با][section-syntax]**
  (100% به CommonMark، 100% به GFM با پلاگین)

## محتوا

* [چه چیزی است؟](#چه-چیزی-است؟)
* [ kdy باید از این استفاده کنم؟](#kdy-باید-از-این-استفاده-کنم؟)
* [نصب](#نصب)
* [استفاده](#استفاده)
* [API](#API)
  * [`Markdown`](#Markdown)
  * [`defaultUrlTransform(url)`](#defaulturltransformurl)
  * [`AllowElement`](#allowelement)
  * [`Components`](#components)
  * [`ExtraProps`](#extraprops)
  * [`Options`](#options)
  * [`UrlTransform`](#urltransform)
* [مثال‌ها](#مثال‌ها)
  * [استفاده از پلاگین](#استفاده-از-پلاگین)
  * [استفاده از پلاگین با گزینه‌ها](#استفاده-از-پلاگین-با-گزینه‌ها)
  * [استفاده از کامپوننت‌های سفارشی (سورس‌هیلایت)](#استفاده-از-کامپوننت‌های-سفارشی-سورس‌هیلایت)
  * [استفاده از پلاگین‌های remark و rehype (ریاضی)](#استفاده-از-پلاگین‌های-remark-و-rehype-ریاضی)
* [پلاگین‌ها](#پلاگین‌ها)
* [سورس](#سورس)
* [انواع](#انواع)
* [همراهی](#همراهی)
* [معماری](#معماری)
* [ضمیمه A: HTML در markdown](#ضمیمه-a-html-در-markdown)
* [ضمیمه B: کامپوننت‌ها](#ضمیمه-b-کامپوننت‌ها)
* [ضمیمه C: خطوط پایان در markdown (و JSX)](#ضمیمه-c-خطوط-پایان-در-markdown-و-jsx)
* [امنیت](#امنیت)
* [مرتبط](#مرتبط)
* [مشارکت](#مشارکت)
* [لیسانس](#لیسانس)

## چه چیزی است؟

این پکیج یک کامپوننت React است که می‌تواند یک رشته markdown را دریافت کند و آن را به طور ایمن به عناصر React تبدیل کند.
شما می‌توانید پلاگین‌ها را پاس دهید تا چگونگی تبدیل markdown را تغییر دهید و کامپوننت‌هایی را پاس دهید که به جای عناصر HTML معمولی استفاده شوند.

* برای یادگیری markdown، به این [راهنما و آموزش][commonmark-help] مراجعه کنید
* برای آزمایش `react-markdown`، به [демо ما][demo] مراجعه کنید


## kdy باید از این استفاده کنم؟

چرا باید از این پکیج استفاده کنم؟ 
سه دلیل اصلی این است که پکیج‌های دیگر به `dangerouslySetInnerHTML` متکی هستند، باگ‌هایی در تبدیل markdown دارند یا اجازه نمی‌دهند که عناصر را با کامپوننت‌ها جایگزین کنید.
`react-markdown` یک درخت مجازی می‌سازد، بنابراین React فقط آنچه تغییر کرده را جایگزین می‌کند.
این پشتیبانی می‌شود زیرا ما از [unified][]، به طور خاص [remark][] برای markdown و [rehype][] برای HTML، که ابزارهای محبوب برای تبدیل محتوا با پلاگین‌ها هستند، استفاده می‌کنیم.

این پکیج بر روی این تمرکز دارد که استفاده از markdown در React برای مبتدیان راحت و ایمن باشد.
وقتی که با unified آشنا شدید، می‌توانید از یک جایگزین مدرن مبتنی بر هوک‌ها به نام [`react-remark`][react-remark] یا [`rehype-react`][rehype-react] استفاده کنید.
اگر می‌خواهید از جاوااسکریپت و JSX *درون* فایل‌های markdown استفاده کنید، از [MDX][] استفاده کنید.

## نصب

این پکیج فقط برای ESM است.
در Node.js (نسخه 16+)، با npm نصب کنید:

```sh
npm install react-markdown
```

در Deno با [`esm.sh`][esmsh]:

```js
import Markdown from 'https://esm.sh/react-markdown@9'
```

در مرورگرها با [`esm.sh`][esmsh]:

```html
<script type="module">
  import Markdown from 'https://esm.sh/react-markdown@9?bundle'
</script>
```

## استفاده

یک مثال ساده:

```jsx
import React from'react'
import {createRoot} from'react-dom/client'
import Markdown from'react-markdown'

const markdown = '# سلام، *پلوتو*!'

createRoot(document.body).render(<Markdown>{markdown}</Markdown>)
```

<details>
<summary>نمایش JSX معادل</summary>

```jsx
<h1>
  سلام، <em>پلوتو</em>!
</h1>
```

</details>

در اینجا مثالی است که نشان می‌دهد چگونه از یک پلاگین استفاده کنید ([`remark-gfm`][remark-gfm]، که پشتیبانی از پانویس، خط خوردگی، جداول، لیست وظایف و آدرس‌های وب را اضافه می‌کند):

```jsx
import React from'react'
import {createRoot} from'react-dom/client'
import Markdown from'react-markdown'
import remarkGfm from'remark-gfm'

const markdown = `فقط یک لینک: www.nasa.gov.`

createRoot(document.body).render(
  <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
)
```

<details>
<summary>نمایش JSX معادل</summary>

```jsx
<p>
  فقط یک لینک: <a href="http://www.nasa.gov">www.nasa.gov</a>.
</p>
```

</details>

## API

این پکیج شناسه‌های زیر را صادر می‌کند:
[`defaultUrlTransform`][api-default-url-transform].
صادرات پیش‌فرض [`Markdown`][api-markdown] است.

### `Markdown`

کامپوننت برای رندر کردن markdown.

###### پارامترها

* `options` ([`Options`][api-options])
  — props

###### بازگشت

عنصر React (`JSX.Element`).

### `defaultUrlTransform(url)`

آدرس را ایمن کنید.

###### پارامترها

* `url` (`string`)
  — آدرس

###### بازگشت

آدرس ایمن (`string`).

### `AllowElement`

فیلتر عناصر (نوع TypeScript).

###### پارامترها

* `node` ([`Element` از `hast`][hast-element])
  — عنصر برای چک کردن
* `index` (`number | undefined`)
  — ایندکس `element` در `parent`
* `parent` ([`Node` از `hast`][hast-node])
  — والد `element`

###### بازگشت

آیا `element` را اجازه دهید (`boolean`، اختیاری).

### `Components`

نقشه تگ‌ها به کامپوننت‌ها (نوع TypeScript).

###### نوع

```ts
import type {Element} from 'hast'

type Components = Partial<{
  [TagName in keyof JSX.IntrinsicElements]:
    // کامپوننت کلاس:
    | (new (props: JSX.IntrinsicElements[TagName] & ExtraProps) => JSX.ElementClass)
    // کامپوننت تابع:
    | ((props: JSX.IntrinsicElements[TagName] & ExtraProps) => JSX.Element | string | null | undefined)
    // نام تگ:
    | keyof JSX.IntrinsicElements
}>
```

### `ExtraProps`

پروپ‌های اضافی (نوع TypeScript).

###### نوع

```ts
type ExtraProps = Record<string, unknown>
```

### `Options`

گزینه‌ها (نوع TypeScript).

###### نوع

```ts
type Options = {
  /**
   * اجزای سفارشی برای استفاده به جای عناصر HTML معمولی.
   */
  components?: Components
  /**
   * پلاگین‌های remark برای استفاده در تبدیل markdown.
   */
  remarkPlugins?: Plugin[]
  /**
   * پلاگین‌های rehype برای استفاده در تبدیل HTML.
   */
  rehypePlugins?: Plugin[]
  /**
   * اجزای سفارشی برای استفاده به جای عناصر HTML معمولی.
   */
  allowElement?: AllowElement
  /**
   * پروپ‌های اضافی برای پاس دادن به کامپوننت‌ها.
   */
  extraProps?: ExtraProps
  /**
   * تابعی برای تبدیل آدرس‌ها.
   */
  urlTransform?: UrlTransform
}
```

### `UrlTransform`

تابع تبدیل آدرس (نوع TypeScript).

###### نوع

```ts
type UrlTransform = (url: string) => string
```

## مثال‌ها

### استفاده از پلاگین

```jsx
import React from'react'
import {createRoot} from'react-dom/client'
import Markdown from'react-markdown'
import remarkGfm from'remark-gfm'

const markdown = `فقط یک لینک: www.nasa.gov.`

createRoot(document.body).render(
  <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
)
```

### استفاده از پلاگین با گزینه‌ها

```jsx
import React from'react'
import {createRoot} from'react-dom/client'
import Markdown from'react-markdown'
import remarkGfm from'remark-gfm'

const markdown = `فقط یک لینک: www.nasa.gov.`

createRoot(document.body).render(
  <Markdown remarkPlugins={[remarkGfm]} options={{allowElement: ['a']}}>{markdown}</Markdown>
)
```

### استفاده از کامپوننت‌های سفارشی (سورس‌هیلایت)

```jsx
import React from'react'
import {createRoot} from'react-dom/client'
import Markdown from'react-markdown'
import {Code} from './Code'

const markdown = '```js\nconsole.log("سلام، دنیا!");\n```'

createRoot(document.body).render(
  <Markdown components={{code: Code}}>{markdown}</Markdown>
)
```

### استفاده از پلاگین‌های remark و rehype (ریاضی)

```jsx
import React from'react'
import {createRoot} from'react-dom/client'
import Markdown from'react-markdown'
import remarkMath from'remark-math'
import rehypeKatex from'rehype-katex'

const markdown = '$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$'

createRoot(document.body).render(
  <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{markdown}</Markdown>
)
```

## پلاگین‌ها

* [remark-gfm][remark-gfm]
* [remark-math][remark-math]
* [rehype-katex][rehype-katex]

## سورس

* [CommonMark][commonmark]
* [GFM][gfm]

## انواع

* [TypeScript][typescript]

## همراهی

* [React][react]
* [remark][remark]
* [rehype][rehype]

## معماری

* [unified][unified]

## ضمیمه A: HTML در markdown

* [HTML در markdown][html-in-markdown]

## ضمیمه B: کامپوننت‌ها

* [کامپوننت‌ها در React][components-in-react]

## ضمیمه C: خطوط پایان در markdown (و JSX)

* [خطوط پایان در markdown][line-endings-in-markdown]
* [خطوط پایان در JSX][line-endings-in-jsx]

## امنیت

* [امنیت در React][security-in-react]


## مرتبط

* [MDX][mdx]
* [remark][remark]
* [rehype][rehype]

## مشارکت

* [مشارکت در پروژه][contribute-to-project]

## لایسنس

* [لایسنس MIT][mit-license]

## توسعه‌دهندگان

* [تیم توسعه‌دهندگان][developers]

## پشتیبانی

* [پشتیبانی مالی][financial-support]
* [پشتیبانی فنی][technical-support]

## منابع

* [منابع و مراجع][resources]

[build-badge]: https://img.shields.io/github/workflow/status/react-markdown/react-markdown/CI?label=build
[build]: https://github.com/react-markdown/react-markdown/actions?query=workflow%3ACI
[coverage-badge]: https://img.shields.io/codecov/c/github/react-markdown/react-markdown.svg
[coverage]: https://codecov.io/github/react-markdown/react-markdown
[downloads-badge]: https://img.shields.io/npm/dm/react-markdown.svg
[downloads]: https://www.npmjs.com/package/react-markdown
[size-badge]: https://img.shields.io/bundlephobia/minzip/react-markdown.svg
[size]: https://bundlephobia.com/result?p=react-markdown
[sponsors-badge]: https://img.shields.io/opencollective/sponsors/react-markdown.svg
[collective]: https://opencollective.com/react-markdown
[backers-badge]: https://img.shields.io/opencollective/backers/react-markdown.svg
[chat-badge]: https://img.shields.io/badge/chat-online-brightgreen.svg
[chat]: https://github.com/react-markdown/react-markdown/discussions

[remark]: https://remark.js.org/
[rehype]: https://rehype.js.org/
[unified]: https://unified.js.org/
[commonmark]: https://commonmark.org/
[gfm]: https://github.github.com/gfm/
[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[mdx]: https://mdxjs.com/
[contribute-to-project]: https://github.com/react-markdown/react-markdown/blob/main/CONTRIBUTING.md
[mit-license]: https://opensource.org/licenses/MIT
[developers]: https://github.com/react-markdown/react-markdown/graphs/contributors
[financial-support]: https://opencollective.com/react-markdown
[technical-support]: https://github.com/react-markdown/react-markdown/discussions
[resources]: https://github.com/react-markdown/react-markdown/blob/main/docs/resources.md

[remark-gfm]: https://github.com/remarkjs/remark-gfm
[remark-math]: https://github.com/remarkjs/remark-math
[rehype-katex]: https://github.com/remarkjs/rehype-katex

[html-in-markdown]: https://github.com/react-markdown/react-markdown/blob/main/docs/html-in-markdown.md
[components-in-react]: https://reactjs.org/docs/components-and-props.html
[line-endings-in-markdown]: https://github.com/react-markdown/react-markdown/blob/main/docs/line-endings-in-markdown.md
[line-endings-in-jsx]: https://github.com/react-markdown/react-markdown/blob/main/docs/line-endings-in-jsx.md
[security-in-react]: https://reactjs.org/docs/security.html