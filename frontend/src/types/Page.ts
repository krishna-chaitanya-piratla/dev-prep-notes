export interface Content {
  type: string;
  contents: string;
  id?: string;
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
