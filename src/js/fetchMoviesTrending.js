const axios = require('axios').default;
import { pagination } from './pagination';
import { ApiKey } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';
import { onScroll, onToTopBtn } from './scroll';

const URL = 'https://api.themoviedb.org/3/trending';
const moviesElement = document.querySelector('.movies');

let mediaType = 'all';
let timeWindow = 'day';

export async function fetchMoviesTrending(page) {
  try {
    const responce = await axios.get(
      `${URL}/${mediaType}/${timeWindow}?api_key=${ApiKey}&page=${page}`
    );

    return responce.data.results;
  } catch (error) {
    console.error(error);
  }
}

pagination.on('afterMove', event => {
  const currentPage = event.page;
  moviesElement.innerHTML = '';
  renderMoviesTrending(fetchMoviesTrending(currentPage));
  onScroll();
  onToTopBtn();
});
