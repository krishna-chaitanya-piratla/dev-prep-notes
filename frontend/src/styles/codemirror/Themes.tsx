import customCodeBlockTheme from './DefaultTheme';
import { solarizedDark } from './themes/SolarizedDark';
import { basicLight } from './themes/BasicLight';
import { basicDark } from './themes/BasicDark';
import { solarizedLight } from './themes/SolarizedLight';
import { materialDark } from './themes/MaterialDark';
import { nord } from './themes/Nord';
import { gruvboxLight } from './themes/Gruvbox Light';
import { gruvboxDark } from './themes/Gruvbox Dark';


export const codeblockThemes = [
    { name: 'Default', theme: customCodeBlockTheme, background: '#f5f6f9', color: '#000000' },
    { name: 'Basic Light', theme: basicLight, background: '#ffffff', color: '#2e3440' },
    { name: 'Basic Dark', theme: basicDark, background: '#2E3235', color: '#DDDDDD' },
    { name: 'Solarized Light', theme: solarizedLight, background: '#fdf6e3', color: '#657b83' },
    { name: 'Solarized Dark', theme: solarizedDark, background: '#002b36', color: '#93a1a1' },
    { name: 'Material Dark', theme: materialDark, background: '#2e3235', color: '#bdbdbd' },
    { name: 'Nord', theme: nord, background: '#2e3440', color: '#d8dee9' },
    { name: 'Gruvbox Light', theme: gruvboxLight, background: '#fbf1c7', color: '#3c3836' },
    { name: 'Gruvbox Dark', theme: gruvboxDark, background: '#282828', color: '#ebdbb2' },
  ];