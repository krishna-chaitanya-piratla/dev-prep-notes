import { makeAutoObservable } from 'mobx';
import { Page } from '../types/Page';
import { data } from '../data/sample';

class DataStore {
  pages: Page[];
  currentPage: Page;
  linkName: string;

  constructor() {
    this.pages = data;
    this.currentPage = data[0];
    this.linkName = data[0].metadata.linkName;
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
    const page = this.pages.find(p => p.metadata.id === pageId);
    if (page && page.title) {
      page.title.logo = logo;
      this.updatePage(page); // Ensure the update is processed
    } else {
      console.log(`Page not found for ID: ${pageId}`);
    }
  };

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
    this.pages = this.pages.map(page => page.metadata.id === updatedPage.metadata.id ? updatedPage : page);
    if (this.currentPage.metadata.id === updatedPage.metadata.id) {
      this.currentPage = updatedPage;
    }
    this.processCurrentPage();
  };

  getLogo = (pageId: string) => {
    const page = this.pages.find(p => p.metadata.id === pageId);
    return page?.title.logo;
  };
}

const dataStore = new DataStore();
export default dataStore;
