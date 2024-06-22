import { makeAutoObservable } from 'mobx';
import { data } from '../data/sample';
import { Page, PageWithChildren } from '../types/Page';

class DataStore {
  pages: Page[];
  currentPage: Page;
  linkName: string;
  pageTree: PageWithChildren[];
  expandedPages: Set<string>;

  constructor() {
    this.pages = data;
    this.currentPage = data[0];
    this.linkName = data[0].metadata.linkName;
    this.pageTree = this.buildPageTree();
    this.expandedPages = new Set();
    makeAutoObservable(this);
    this.processCurrentPage();
  }

  setPage = (page: Page) => {
    this.currentPage = page;
    this.linkName = page.metadata.linkName;
    this.processCurrentPage();
  };

  toggleExpand = (pageId: string) => {
    if (this.expandedPages.has(pageId)) {
      this.expandedPages.delete(pageId);
    } else {
      this.expandedPages.add(pageId);
    }
  };

  isExpanded = (pageId: string): boolean => {
    return this.expandedPages.has(pageId);
  };

  buildPageTree() {
    const map: { [key: string]: PageWithChildren } = {};
    const roots: PageWithChildren[] = [];

    this.pages.forEach(page => {
      map[page.metadata.id] = { ...page, children: [] };
    });

    this.pages.forEach(page => {
      if (page.metadata.parentId) {
        map[page.metadata.parentId].children.push(map[page.metadata.id]);
      } else {
        roots.push(map[page.metadata.id]);
      }
    });

    return roots;
  }

  processCurrentPage() {
    const generateId = (type: string, blockIndex: number, contentIndex: number) => {
      return `${type}-${blockIndex}-${contentIndex}`;
    };

    this.currentPage.contents.forEach((block, blockIndex) => {
      block.contents.forEach((content: any, contentIndex: number) => {
        content.id = generateId(content.type, blockIndex, contentIndex);
      });
    });
  }
}

const dataStore = new DataStore();
export default dataStore;
