export interface Page {
    metadata: {
      id: string;
      link: string;
      linkName: string;
      pageType: string;
      parentId?: string; // Optional parentId property
    };
    title: {
      h4Text: string;
      h2Text: string;
    };
    contents: Array<{
      type: string;
      contents: any;
    }>;
  }
  