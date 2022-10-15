import { ApiKey, page } from './refs';
import { pagination } from './pagination';
import { fetchMoviesTrending } from './fetchMoviesTrending';
import { onScroll, onToTopBtn } from './scroll';
import { renderMoviesTrending } from './renderMoviesTrending';

import { loader } from './refs';

const axios = require('axios').default;

import Notiflix from 'notiflix';

import debounce from 'lodash.debounce';

import { renderMoviesTrending } from './renderMoviesTrending';

const searchFilmForm = document.querySelector('.header__form');
const searchFilmInput = document.querySelector('.header__form-input');
const moviesElement = document.querySelector('.movies');


const DEBOUNCE_DELAY = 300;

let inputValue = '';
let searchFilms = true;
// const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=1&include_adult=false`;

// Применяем приём Debounce (задержка в 300 мс)
searchFilmInput.addEventListener('input',
  debounce(onInputChenge, DEBOUNCE_DELAY));

// Санитизация введённой строки методом trim()
async function onInputChenge() {
  const page = searchFilmInput.value.trim();
  if (page === '') {
    return (moviesElement.innerHTML = '');
   
  }

  const data = await fetchFilms(page);
  console.log(data);
  moviesElement.innerHTML = '';
  

  try {
    // Интерфейс с помощью бибилиотеки Notiflix
    if (data.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific movie name.'
      );
    } else if (data.length < 10 && data.length >= 2) {
      moviesElement.insertAdjacentHTML(
        'beforeend',
        card(data)
      );
    } else {
      moviesElement.insertAdjacentHTML(
        'beforeend',
        card(data)
      );
    }
  }
  catch {
    Notiflix.Notify.failure('Oops, there is no movie with that name');
        return [];
  }
}


export async function fetchFilms(page) {
  try {
    const fetchResult = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
    );
    searchFilms = false;
    if (page === 1) {
      pagination.reset(fetchResult.data.total_results);
    }
    console.log(fetchResult.data);
    return fetchResult.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function searchFilm(e) {
  e.preventDefault();


    
    
  inputValue = searchFilmInput.value;
  console.log(searchFilmInput.value);
  searchFilmForm.reset();
  moviesElement.innerHTML = '';
  await renderMoviesTrending(fetchFilms(page));
  loader.classList.add('loader-hidden');
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  moviesElement.innerHTML = '';
  if (searchFilms) {
    renderMoviesTrending(fetchMoviesTrending(currentPage));
  } else {
    renderMoviesTrending(fetchFilms(currentPage));
  }
  onScroll();
  onToTopBtn();
});

searchFilmForm.addEventListener('submit', searchFilm);

