import { ApiKey, page } from './refs';
import { pagination } from './pagination';
import { fetchMoviesTrending } from './fetchMoviesTrending';
import { onScroll, onToTopBtn } from './scroll';
import { renderMoviesTrending } from './renderMoviesTrending';
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const axios = require('axios').default;




import { renderMoviesTrending } from './renderMoviesTrending';

const searchFilmForm = document.querySelector('.header__form');
const searchFilmInput = document.querySelector('.header__form-input');
const moviesElement = document.querySelector('.movies');


let inputValue = '';
let searchFilms = true;
let answer = null;

export async function fetchFilms(page) {
  try {
    const fetchResult = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
    );
    searchFilms = false;
    if (page === 1) {
      pagination.reset(fetchResult.data.total_results);
    }
    
    return fetchResult.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function searchFilm(e) {
  e.preventDefault();

  inputValue = searchFilmInput.value;
  if (inputValue === '') {
      Notiflix.Notify.failure(
                'Enter the correct movie name and try again.'
      );
    return;
  }
 
  searchFilmForm.reset();
  moviesElement.innerHTML = '';
  try {
     answer = await (fetchFilms(page));
   
    if (answer.length === 0) {
      Loading.remove();
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and try again.'
          
      );
      return;
          }
    await renderMoviesTrending(answer);
  } catch (error) {
   
  }
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


