import { CalloutBoxContent, ChecklistContent, CodeBlockContent, Content, ListItemContent, OrderedListContent, SpreadsheetContent, TableContent, UnorderedListContent } from "../types/Page";
import CodeBlock from "../components/CodeBlock";
import CalloutBoxComponent from "../components/CalloutBox";
import ChecklistItem from "../components/ChecklistItem";
import { ListContainer, OrderedList, UnorderedList, Checklist } from "../styles/Page/List";
import Table from "../components/Table";
import Spreadsheet from "../components/Spreadsheet";
import Editable from "../components/Editable";

export const text_types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

export function renderText(content: Content, onContentChange: (newContent: Content) => void) {
  return (
    <Editable content={content} onContentChange={onContentChange} />
  );
}

export function renderCodeBlock(content: Content, onContentChange: (newContent: Content) => void) {
  return (
    <CodeBlock content={content as CodeBlockContent} onContentChange={onContentChange} />
  );
}

export function renderCalloutBox(content: Content) {
  return <CalloutBoxComponent content={content as CalloutBoxContent} />;
}

function renderListItem(item: ListItemContent, depthNumbering: boolean) {
  return (
    <li key={item.id}>
      {item.contents}
      {item.subItems && (
        <OrderedList depthNumbering={depthNumbering}>
          {item.subItems.map((subItem) => renderListItem(subItem, depthNumbering))}
        </OrderedList>
      )}
    </li>
  );
}

function renderUnorderedListItem(item: ListItemContent) {
  return (
    <li key={item.id}>
      {item.contents}
      {item.subItems && (
        <UnorderedList>
          {item.subItems.map((subItem) => renderUnorderedListItem(subItem))}
        </UnorderedList>
      )}
    </li>
  );
}

export function renderOrderedList(content: OrderedListContent) {
  return (
    <ListContainer id={content.id}>
      <OrderedList id={content.id} depthNumbering={content.depthNumbering !== false}>
        {content.contents.map((item) => renderListItem(item, content.depthNumbering !== false))}
      </OrderedList>
    </ListContainer>
  );
}

export function renderUnorderedList(content: UnorderedListContent) {
  return (
    <ListContainer id={content.id}>
      <UnorderedList id={content.id}>
        {content.contents.map((item) => renderUnorderedListItem(item))}
      </UnorderedList>
    </ListContainer>
  );
}

export function renderChecklist(content: ChecklistContent) {
  return (
    <ListContainer id={content.id}>
      <Checklist id={content.id}>
        {content.contents.map((item) => (
          <ChecklistItem key={item.id} item={item} />
        ))}
      </Checklist>
    </ListContainer>
  );
}

export function renderTable(content: TableContent) {
  return (
    <Table content={content} />
  );
}

export function renderSpreadsheet(content: SpreadsheetContent) {
  return (
    <div id={content.id}>
      <Spreadsheet data={content.contents} />
    </div>
  );
}

export function renderPageContent(content: Content, onContentChange: (newContent: Content) => void) {
  if (text_types.includes(content.type)) {
    return renderText(content, onContentChange);
  }
  switch (content.type) {
    case 'code-block':
      return renderCodeBlock(content, onContentChange);
    case 'callout-box':
      return renderCalloutBox(content);
    case 'ordered-list':
      return renderOrderedList(content as OrderedListContent);
    case 'unordered-list':
      return renderUnorderedList(content as UnorderedListContent);
    case 'checklist':
      return renderChecklist(content as ChecklistContent);
    case 'table':
      return renderTable(content as TableContent);
    case 'spreadsheet':
      return renderSpreadsheet(content as SpreadsheetContent);
    default:
      return null;
  }
}
