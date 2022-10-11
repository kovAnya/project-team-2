import { openWatchedBtn, openQueueBtn } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';

const moviesElement = document.querySelector('.movies');

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
openQueueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  moviesElement.innerHTML = '';
  renderMoviesTrending(FilmsInLocalStorage('Watched'));
}

function onQueueBtnClick() {
  moviesElement.innerHTML = '';
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
