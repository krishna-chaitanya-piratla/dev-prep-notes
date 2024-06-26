export interface BaseContent {
  type: string;
  id?: string;
}

export interface TextContent extends BaseContent {
  type: 'text' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  contents: string;
}

export interface CodeBlockContent extends BaseContent {
  type: 'code-block';
  contents: { type: string; contents: string }[];
}

export interface ListItemContent extends BaseContent {
  type: 'ordered-list-item' | 'unordered-list-item';
  contents: string;
  subItems?: ListItemContent[];
}

export interface OrderedListContent extends BaseContent {
  type: 'ordered-list';
  depthNumbering?: boolean;
  contents: ListItemContent[];
}

export interface UnorderedListContent extends BaseContent {
  type: 'unordered-list';
  contents: ListItemContent[];
}

export interface ChecklistItemContent extends BaseContent {
  type: 'checklist-item';
  contents: string;
  completed: boolean;
  subItems?: ChecklistItemContent[];
}

export interface ChecklistContent extends BaseContent {
  type: 'checklist';
  contents: ChecklistItemContent[];
}

export interface CalloutBoxContent extends BaseContent {
  type: 'callout-box';
  boxType: 'info' | 'warning';
  title: string;
  collapsedTitle?: string;
  collapsedByDefault: boolean;
  contents: (TextContent | CodeBlockContent)[];
}

export interface TableColumnHeaders extends BaseContent {
  type: 'column-headers';
  contents: string[];
  columnTypes: string[];
}

export interface TableRow extends BaseContent {
  type: 'table-row';
  contents: (string | number | boolean)[];
}

export interface TableContent extends BaseContent {
  type: 'table';
  contents: (TableColumnHeaders | TableRow)[];
}

export interface SpreadsheetContent extends BaseContent {
  type: 'spreadsheet';
  contents: {
    columns: any[];
    rows: any[];
  };
}

export type Content =
  | TextContent
  | CodeBlockContent
  | CalloutBoxContent
  | OrderedListContent
  | UnorderedListContent
  | ChecklistContent
  | TableContent
  | SpreadsheetContent;

export interface Block {
  type: string;
  contents: Content[];
}


export interface Block {
  type: string;
  contents: Content[];
}

export interface Page {
  metadata: {
    id: string;
    link: string;
    linkName: string;
    pageType: string;
    parentId?: string; // Optional parentId property
  };
  title: {
    bannerUrl?: string;
    h4Text: string;
    h2Text: string;
  };
  contents: Block[];
}

export interface PageWithChildren extends Page {
  children: PageWithChildren[];
}

export interface ChecklistItemProps {
  item: ChecklistItemContent;
}
