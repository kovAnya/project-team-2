import { openWatchedBtn, openQueueBtn } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';

const moviesElement = document.querySelector('.movies');

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
openQueueBtn.addEventListener('click', onQueueBtnClick);
window.addEventListener('load', onWatchedBtnClick);

async function onWatchedBtnClick() {
  moviesElement.innerHTML = '';
  openWatchedBtn.classList.add('button--accent');
  openQueueBtn.classList.remove('button--accent');
  await renderMoviesTrending(FilmsInLocalStorage('Watched'));
  addVotesToCard();
}

async function onQueueBtnClick() {
  moviesElement.innerHTML = '';
  openQueueBtn.classList.add('button--accent');
  openWatchedBtn.classList.remove('button--accent');
  await renderMoviesTrending(FilmsInLocalStorage('Queue'));
  addVotesToCard();
}

function addVotesToCard() {
  const votes = document.querySelectorAll('.film__rating--orange');
  votes.forEach(vote => {
    vote.classList.remove('visually-hidden');
  });
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
