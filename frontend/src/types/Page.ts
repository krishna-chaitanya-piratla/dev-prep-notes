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

export interface CalloutBoxContent extends BaseContent {
  type: 'callout-box';
  boxType: 'info' | 'warning';
  collapsedByDefault: boolean;
  collapsedTitle?: string;
  title: string;
  contents: (TextContent | CodeBlockContent)[];
}

export type Content = TextContent | CodeBlockContent | CalloutBoxContent;

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
