import { openWatchedBtn, openQueueBtn, filmsListRef } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
openQueueBtn.addEventListener('click', onQueueBtnClick);

if (filmsListRef.dataset.library === 'library') {
  onWatchedBtnClick();
}

export async function onWatchedBtnClick() {
  filmsListRef.innerHTML = '';
  openWatchedBtn.classList.add('button--accent');
  openQueueBtn.classList.remove('button--accent');
  await renderMoviesTrending(FilmsInLocalStorage('Watched'));
  addVotesToCard();
}

export async function onQueueBtnClick() {
  filmsListRef.innerHTML = '';
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
    parsedDataInLocalStorage = JSON.parse(dataInLocalStorage);
    if (!parsedDataInLocalStorage || parsedDataInLocalStorage.length === 0) {
      Loading.remove();
    }
    return parsedDataInLocalStorage;
  } catch (error) {
    console.warn('Помилка парсингу даних');
  }
}
    

//update page in gallery after removing film
export function onCloseCardBtnClick() {
  if (openQueueBtn.classList.contains('button--accent')) {
    onQueueBtnClick();
    Loading.remove();
  } else if (openWatchedBtn.classList.contains('button--accent')) {
    onWatchedBtnClick();
    Loading.remove();
  }
}
