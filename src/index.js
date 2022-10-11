import './js/modal_film';
import './js/pagination';
import {
  renderMoviesTrending,
  saveInLocalStorage,
} from './js/renderMoviesTrending';
import { fetchMoviesTrending } from './js/fetchMoviesTrending';
import './js/themeSwitcher';
import { page, bodyElement, bodyElementLibrary} from './js/refs';
import './js/spinner';
import './js/modal-log-in';
import './js/log-in';
import './js/footer-modal';
import './js/genres';
import { FilmsInLocalStorage } from './js/watchedLib'



function renderPage(bodyElement, bodyElementLibrary) {
  if(bodyElement.dataset.page === 'index'){
    return renderMoviesTrending(fetchMoviesTrending(page));
  } else if(bodyElementLibrary.dataset.page === 'library') {
    return renderMoviesTrending(FilmsInLocalStorage('Watched'))
  }
} 


console.log(bodyElement)
console.log(bodyElementLibrary)

renderPage(bodyElement, bodyElementLibrary)
