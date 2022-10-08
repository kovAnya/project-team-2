// import './js/modal_film';
// import './js/pagination';
import { renderMoviesTrending } from './js/renderMoviesTrending';
import { fetchMoviesTrending } from './js/fetchMoviesTrending';
import './js/theme_switcher';

renderMoviesTrending(fetchMoviesTrending());
