import { CalloutBoxContent, Content, ListItemContent, OrderedListContent, UnorderedListContent, ChecklistContent, TableContent, SpreadsheetContent } from "../types/Page";
import CodeBlock from "../components/CodeBlock";
import CalloutBoxComponent from "../components/CalloutBox";
import ChecklistItem from "../components/ChecklistItem";
import { ListContainer, OrderedList, UnorderedList, Checklist } from "../styles/Page/List";
import Table from "../components/Table";
import Spreadsheet from "../components/Spreadsheet";

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
