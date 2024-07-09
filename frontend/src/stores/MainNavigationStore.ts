import { makeAutoObservable } from 'mobx';
import { Page, PageWithChildren } from '../types/Page';
import { data } from '../data/sample';

class MainNavigationStore {
  expandedPages: Set<string>;
  pickerPageId: string | null;
  pickerPosition: { x: number; y: number } | null;
  pageTree: PageWithChildren[];

  constructor() {
    this.expandedPages = new Set();
    this.pickerPageId = null;
    this.pickerPosition = null;
    this.pageTree = this.buildPageTree(data);
    makeAutoObservable(this);
  }

  toggleExpand(pageId: string) {
    if (this.expandedPages.has(pageId)) {
      this.expandedPages.delete(pageId);
    } else {
      this.expandedPages.add(pageId);
    }
  }

  isExpanded(pageId: string): boolean {
    const expanded = this.expandedPages.has(pageId);
    return expanded;
  }

  showEmojiPicker(pageId: string, position: { x: number; y: number }) {
    this.pickerPageId = pageId;
    this.pickerPosition = position;
  }

  hideEmojiPicker() {
    this.pickerPageId = null;
    this.pickerPosition = null;
  }

  buildPageTree(pages: Page[]) {
    const map: { [key: string]: PageWithChildren } = {};
    const roots: PageWithChildren[] = [];

    pages.forEach(page => {
      map[page.metadata.id] = { ...page, children: [] };
    });

    pages.forEach(page => {
      if (page.metadata.parentId) {
        map[page.metadata.parentId].children.push(map[page.metadata.id]);
      } else {
        roots.push(map[page.metadata.id]);
      }
    });

    return roots;
  }
}

const mainNavigationStore = new MainNavigationStore();
export default mainNavigationStore;
