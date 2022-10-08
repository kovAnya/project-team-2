import './js/modal_film';
import './js/pagination';
import { renderMoviesTrending } from "./js/renderMoviesTrending";
import { fetchMoviesTrending } from "./js/fetchMoviesTrending";

renderMoviesTrending(fetchMoviesTrending())
