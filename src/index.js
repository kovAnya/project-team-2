// import './js/modal_film';
// import './js/pagination';
import { renderMoviesTrending } from './js/renderMoviesTrending';
import { fetchMoviesTrending } from './js/fetchMoviesTrending';
import {page} from './js/refs';

renderMoviesTrending(fetchMoviesTrending(page));


import './js/footer-modal';
import './js/genres';