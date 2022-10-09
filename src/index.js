// import './js/modal_film';
import './js/pagination';
import { renderMoviesTrending } from './js/renderMoviesTrending';
import { fetchMoviesTrending } from './js/fetchMoviesTrending';
import { page } from './js/refs';
import './js/spinner';
import './js/modal-log-in';
import './js/log-in';
import './js/footer-modal';
import './js/genres';

renderMoviesTrending(fetchMoviesTrending(page));
