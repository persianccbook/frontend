import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { omit } from "lodash";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: Props) => {
  return (
    <Markdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        code: function code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...omit(rest, "ref")}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={atomDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default MarkdownRenderer;
