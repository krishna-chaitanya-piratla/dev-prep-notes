import { makeAutoObservable } from 'mobx';
import { dummy_page_01 } from '../data/sample';

class DataStore {
  currentPage = dummy_page_01;
  linkName = dummy_page_01.metadata.linkName;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: typeof dummy_page_01) {
    this.currentPage = page;
    this.linkName = page.metadata.linkName;
  }
}

const dataStore = new DataStore();
export default dataStore;
