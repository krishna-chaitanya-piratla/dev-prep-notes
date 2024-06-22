import React, { useEffect, useRef, useState } from 'react';
import "highlight.js/styles/github.css";
import { marked } from "marked";
import hljs from "highlight.js";
import { StyledCodeBlock } from '../styles/CodeBlock';
import '../styles/CodeBlockCustomTheme.css';

interface CodeBlockProps {
  language: string;
  contents: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, contents }) => {
  const codeBlockRef = useRef<HTMLDivElement | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const codeElement = codeBlockRef.current;
    if (codeElement) {
      codeElement.querySelectorAll('pre code').forEach((block) => {
        const htmlBlock = block as HTMLElement;
        if (htmlBlock.dataset.highlighted === "yes") {
          // If already highlighted, skip
          return;
        }
        hljs.highlightElement(htmlBlock);
        htmlBlock.dataset.highlighted = "yes"; // Mark it as highlighted after applying highlightElement
      });
    }
  }, [htmlContent]); // Depend on htmlContent

  useEffect(() => {
    const markdownContent = `
\`\`\`${language}
${contents}
\`\`\`
`;
    // Using a promise to handle async parsing if it occurs
    const parsedContent = marked.parse(markdownContent);
    if (parsedContent instanceof Promise) {
      parsedContent.then(setHtmlContent).catch((error) => {
        console.error("Error parsing markdown:", error);
        setHtmlContent(""); // Fallback in case of error
      });
    } else {
      setHtmlContent(parsedContent);
    }
  }, [contents, language]);

  return (
    <StyledCodeBlock
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      ref={codeBlockRef}
    />
  );
};

export default CodeBlock;
