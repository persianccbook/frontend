import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { omit } from "lodash";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  markdown: string;
}

// TODO: change to next image
const MarkdownRenderer = ({ markdown }: Props) => {
  const urlTransform = (url: string) => {
    // Allow Base64 and any valid URLs
    if (url.startsWith("data:image/")) return url; // Base64 image
    return url; // Pass through other URLs
  };
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      urlTransform={urlTransform}
      components={{
        img: function img(props) {
          return (
            <img {...props} style={{ maxWidth: "100%", height: "auto" }} />
          );
        },
        code: function code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...omit(rest, "ref")}
              PreTag="div"
              language={match[1]}
              style={atomDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default MarkdownRenderer;
