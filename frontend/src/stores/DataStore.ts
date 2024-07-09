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

  setBannerPosition = (position: { x: number; y: number }) => {
    if (this.currentPage.title) {
      this.currentPage.title.position = position;
    }
  };

  getBannerPosition = () => {
    return this.currentPage.title.position || { x: 0, y: 0 };
  };

  setLogo = (logo: string) => {
    if (this.currentPage.title) {
      this.currentPage.title.logo = logo;
      this.updatePage(this.currentPage);
    }
  };

  setLogoForPage = (pageId: string, logo: string) => {
    console.log(`Setting logo for page: ${pageId}, logo: ${logo}`);
    const page = this.pages.find(p => p.metadata.id === pageId);
    if (page && page.title) {
      console.log(`Found page: ${page.metadata.linkName}`);
      page.title.logo = logo;
      this.updatePage(page); // Ensure the update is processed
    } else {
      console.log(`Page not found for ID: ${pageId}`);
    }
  };

  toggleExpand = (pageId: string) => {
    if (this.expandedPages.has(pageId)) {
      this.expandedPages.delete(pageId);
      console.log(`Collapsed page: ${pageId}, expandedPages: `, Array.from(this.expandedPages));
    } else {
      this.expandedPages.add(pageId);
      console.log(`Expanded page: ${pageId}, expandedPages: `, Array.from(this.expandedPages));
    }
  };

  isExpanded = (pageId: string): boolean => {
    const expanded = this.expandedPages.has(pageId);
    console.log(`Checking if page is expanded: ${pageId}, expanded: ${expanded}`);
    return expanded;
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

  
  updatePage = (updatedPage: Page) => {
    console.log(`Updating page: ${updatedPage.metadata.linkName}`);
    this.pages = this.pages.map(page => page.metadata.id === updatedPage.metadata.id ? updatedPage : page);
    if (this.currentPage.metadata.id === updatedPage.metadata.id) {
      this.currentPage = updatedPage;
    }
    this.processCurrentPage();
  };
  
  getLogo = (pageId: string) => {
    const page = this.pages.find(p => p.metadata.id === pageId);
    console.log(`Getting logo for page: ${pageId}, logo: ${page?.title.logo}`);
    return page?.title.logo;
  };
}

const dataStore = new DataStore();
export default dataStore;
