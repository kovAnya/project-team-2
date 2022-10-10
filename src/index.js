// import './js/modal_film';
import './js/pagination';
import { renderMoviesTrending , saveInLocalStorage} from './js/renderMoviesTrending';
import { fetchMoviesTrending } from './js/fetchMoviesTrending';
import './js/themeSwitcher';
import { page } from './js/refs';
import './js/spinner';
import './js/modal-log-in';
import './js/log-in';
import './js/footer-modal';
import './js/genres';

renderMoviesTrending(fetchMoviesTrending(page));
