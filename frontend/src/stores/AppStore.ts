import { makeAutoObservable } from 'mobx';

class AppStore {
  navBackgroundColor: string;
  fontFamily: string;

  constructor() {
    this.navBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    this.fontFamily = 'Wotfard, sans-serif'; // Default font
    makeAutoObservable(this);
  }

  setNavBackgroundColor(color: string) {
    this.navBackgroundColor = color;
    document.documentElement.style.setProperty('--background-color', color);
  }

  setFontFamily(font: string) {
    this.fontFamily = font;
    document.documentElement.style.setProperty('--font-family', font);
  }
}

const appStore = new AppStore();
export default appStore;