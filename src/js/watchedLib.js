import { openWatchedBtn, openQueueBtn } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';

const moviesElement = document.querySelector('.movies');

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
openQueueBtn.addEventListener('click', onQueueBtnClick);
window.addEventListener('load', onWatchedBtnClick);

function onWatchedBtnClick() {
  moviesElement.innerHTML = '';
  openWatchedBtn.classList.add('button--accent');
  openQueueBtn.classList.remove('button--accent');
  renderMoviesTrending(FilmsInLocalStorage('Watched'));
}

function onQueueBtnClick() {
  moviesElement.innerHTML = '';
  openQueueBtn.classList.add('button--accent');
  openWatchedBtn.classList.remove('button--accent');
  renderMoviesTrending(FilmsInLocalStorage('Queue'));
}

//get films from me library
export function FilmsInLocalStorage(category) {
  let dataInLocalStorage = localStorage.getItem(category);
  let parsedDataInLocalStorage = '';

  try {
    return (parsedDataInLocalStorage = JSON.parse(dataInLocalStorage));
  } catch (error) {
    console.warn('Помилка парсингу даних');
  }
}
