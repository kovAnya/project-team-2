import { localStorage } from './localStorage';

export const THEME_STORAGE = 'theme';
const themeSwither = document.querySelectorAll(`.change_theme`);
const changeThemeCssLink = document.querySelector(`[title= "theme"]`);
const dark = 'onDark';
const light = 'onLight';

themeSwither.forEach(swither => swither.addEventListener(`click`, changeTheme));

function changeTheme() {
  localStorage.save(THEME_STORAGE, this.dataset.theme);

  if (this.dataset.theme === dark) {
    changeThemeCssLink.disabled = false;
  }
  if (this.dataset.theme === light) {
    changeThemeCssLink.disabled = true;
  }
}

let activeTheme = localStorage.load(THEME_STORAGE);

if (activeTheme === null || activeTheme === light) {
  changeThemeCssLink.disabled = true;
} else {
  changeThemeCssLink.disabled = false;
}
