import { makeAutoObservable } from 'mobx';
import { data } from '../data/sample';

class DataStore {
  pages: typeof data;
  currentPage: typeof data[0];
  linkName: string;

  constructor() {
    this.pages = data;
    this.currentPage = data[0];
    this.linkName = data[0].metadata.linkName;
    makeAutoObservable(this);
  }

  setPage = (page: typeof data[0]) => {
    this.currentPage = page;
    this.linkName = page.metadata.linkName;
  };
}

const dataStore = new DataStore();
export default dataStore;
