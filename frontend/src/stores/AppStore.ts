import { makeAutoObservable } from 'mobx';

class AppStore {
  navBackgroundColor: string;

  constructor() {
    this.navBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    makeAutoObservable(this);
  }

  setNavBackgroundColor(color: string) {
    this.navBackgroundColor = color;
    document.documentElement.style.setProperty('--background-color', color);
  }
}

const appStore = new AppStore();
export default appStore;
