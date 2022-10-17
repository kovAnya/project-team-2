import { page } from './refs';
import { pagination } from './pagination';
import { fetchMoviesTrending } from './API/fetchMoviesTrending';
import { fetchFilms } from './API/fetchSearchMovie';
import { onScroll, onToTopBtn } from './scroll';
import { renderMoviesTrending } from './renderMoviesTrending';
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { renderMoviesTrending } from './renderMoviesTrending';

const searchFilmForm = document.querySelector('.header__form');
const searchFilmInput = document.querySelector('.header__form-input');
const moviesElement = document.querySelector('.movies');

let inputValue = '';
let searchFilms = true;
let answer = null;

async function searchFilm(e) {
  e.preventDefault();

  inputValue = searchFilmInput.value;
  if (inputValue === '') {
    Notiflix.Notify.failure('Enter the correct movie name and try again.');
    return;
  }

  searchFilmForm.reset();
  try {
    answer = await fetchFilms(inputValue, page);
    if (answer.length === 0) {
      Loading.remove();
      Notiflix.Notify.failure(
        'Search result not successful. Enter the correct movie name and try again.'
      );
      return;
    }
    searchFilms = false;
    moviesElement.innerHTML = '';
    await renderMoviesTrending(answer);
  } catch (error) {}
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  moviesElement.innerHTML = '';
  if (searchFilms) {
    renderMoviesTrending(fetchMoviesTrending(currentPage));
  } else {
    renderMoviesTrending(fetchFilms(inputValue, currentPage));
  }
  onScroll();
  onToTopBtn();
});

searchFilmForm.addEventListener('submit', searchFilm);
