import { ApiKey, page } from './refs';

import { loader } from './refs';

const axios = require('axios').default;



import { renderMoviesTrending } from './renderMoviesTrending';

const searchFilmForm = document.querySelector('.header__form');
const searchFilmInput = document.querySelector('.header__form-input');
const moviesElement = document.querySelector('.movies');


let inputValue = '';


async function fetchFilms(page) {
  try {
    const fetchResult = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
    );
    console.log(fetchResult.data);
    return fetchResult.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function searchFilm(e) {
  e.preventDefault();
   loader.classList.add('loader-hidden');
  inputValue = searchFilmInput.value;
  console.log(searchFilmInput.value);
  searchFilmForm.reset();
  moviesElement.innerHTML = '';
  await renderMoviesTrending(fetchFilms(page));
  
}

searchFilmForm.addEventListener('submit', searchFilm);


