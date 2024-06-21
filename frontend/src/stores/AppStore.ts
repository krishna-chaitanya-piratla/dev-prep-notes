import { makeAutoObservable } from 'mobx';

class AppStore {
  navBackgroundColor: string;
  fontFamily: string;
  fontSize: number;

  constructor() {
    this.navBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
    this.fontFamily = 'Wotfard, sans-serif'; // Default font
    this.fontSize = 16; // Default font size in pixels
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

  setFontSize(size: number) {
    this.fontSize = size;
    document.documentElement.style.setProperty('--base-text-size', `${size}px`);
  }
}

const appStore = new AppStore();
export default appStore;
