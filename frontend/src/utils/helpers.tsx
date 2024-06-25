import { CalloutBoxContent, Content, ListItemContent, OrderedListContent } from "../types/Page";
import CodeBlock from "../components/CodeBlock";
import CalloutBoxComponent from "../components/CalloutBox";

export const text_types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

export function renderText(content: Content) {
  switch (content.type) {
    case 'h1':
      return <h1 id={content.id}>{content.contents as string}</h1>;
    case 'h2':
      return <h2 id={content.id}>{content.contents as string}</h2>;
    case 'h3':
      return <h3 id={content.id}>{content.contents as string}</h3>;
    case 'h4':
      return <h4 id={content.id}>{content.contents as string}</h4>;
    case 'h5':
      return <h5 id={content.id}>{content.contents as string}</h5>;
    case 'h6':
      return <h6 id={content.id}>{content.contents as string}</h6>;
    case 'p':
      return <p id={content.id} dangerouslySetInnerHTML={{ __html: content.contents as string }}></p>;
  }
}

export function renderCodeBlock(content: Content) {
  return (
    <div id={content.id}>
      {(content.contents as Content[]).map((item, index) => (
        <CodeBlock key={index} language={item.type} contents={item.contents as string} />
      ))}
    </div>
  );
}

export function renderCalloutBox(content: Content) {
  if (text_types.includes(content.type)) {
    return renderText(content);
  }
  switch (content.type) {
    case 'code-block':
      return renderCodeBlock(content);
    default:
      return null;
  }
}

function renderListItem(item: ListItemContent) {
  return (
    <li key={item.id}>
      {item.contents}
      {item.subItems && (
        <ol>
          {item.subItems.map((subItem) => renderListItem(subItem))}
        </ol>
      )}
    </li>
  );
}

export function renderOrderedList(content: OrderedListContent) {
  return (
    <ol id={content.id}>
      {content.contents.map((item) => renderListItem(item))}
    </ol>
  );
}

export function renderPageContent(content: Content) {
  if (text_types.includes(content.type)) {
    return renderText(content);
  }
  switch (content.type) {
    case 'code-block':
      return renderCodeBlock(content);
    case 'callout-box':
      return <CalloutBoxComponent content={content as CalloutBoxContent} />;
    case 'ordered-list':
      return renderOrderedList(content as OrderedListContent);
    default:
      return null;
  }
}
