import { localStorageUs } from './localStorage';

const themeSwither = document.querySelectorAll(`.change_theme`);
const changeThemeCssLink = document.querySelector(`[title= "theme"]`);
const THEMES = {
  dark: 'onDark',
  light: 'onLight',
};

themeSwither.forEach(swither => swither.addEventListener(`click`, changeTheme));

function changeTheme() {
  localStorageUs.save('theme', this.dataset.theme);

  if (this.dataset.theme === THEMES.dark) {
    changeThemeCssLink.disabled = false;
  }
  if (this.dataset.theme === THEMES.light) {
    changeThemeCssLink.disabled = true;
  }
}

let activeTheme = localStorageUs.load('theme');

if (activeTheme === null || activeTheme === THEMES.light) {
  changeThemeCssLink.disabled = true;
} else {
  changeThemeCssLink.disabled = false;
}
