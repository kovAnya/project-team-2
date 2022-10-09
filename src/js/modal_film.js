import { fetchMoviesTrending } from "./fetchMoviesTrending";
import {getMovieGenres} from './genres';
import {renderMoviesTrending} from './renderMoviesTrending';

const backdrop = document.querySelector('.modal__backdrop');
const filmsListRef = document.querySelector('.movies'); 
const closeBtnRef = document.querySelector('.closeModal');
const modal = document.querySelector('.modal__container');


filmsListRef.addEventListener('click', onFilmCardClick);
closeBtnRef.addEventListener('click', onCloseBtnClick);

function onFilmCardClick(e) {
  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscBtnPress);
  document.addEventListener('click', onBackdropClick);

  modal.insertAdjacentHTML('afterbegin', makeFilmModalMarkup());
  console.log(onFilmCardClick);
}

function makeFilmModalMarkup(
  poster_path,
  original_title,
  title,
  name,
  vote_average,
  vote_count,
  genre_ids,
  overview,
  popularity) {
  return `
  <div class="film__image">
  <img class="image" src="https://image.tmdb.org/t/p/original${poster_path}" alt=${
     title || original_title || name
     }/>
    </div>
    <div class="film__information">
      <div>
        <h2 class="film__title">${title || original_title || name}</h2>
        <ul>
          <li class="film__item">
            <p class="film__details">Vote / Votes</p>
            <p class="film__info--uper">
              <span class="film__rating--orange">${vote_average}</span>
              <span class="film__rating--divider"> / </span>
              <span class="vote-count">${vote_count}</span>
            </p>
          </li>
          <li class="film__item">
            <p class="film__details">Popularity</p>
            <p class="film__info--uper">${popularity}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Original title</p>
            <p>${title || original_title || name}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Genre</p>
            <p class="film__info">${genre_ids}</p>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="film__about__title">About</h3>
        <p class="film__about__text">${overview}</p>
      </div>
      <div class="film__button__wrapper">
        <button type="button" class="film__button btn__watch">Add to watched</button>
        <button type="button" class="film__button btn__queue">Add to queue</button>
      </div>
      </div>`;
}

//Функція закриття по кнопці
function onCloseBtnClick() {
  const filmImg = document.querySelector('.film__image');
  const filmInfo = document.querySelector('.film__information');
  filmImg.remove();
  filmInfo.remove();

  backdrop.classList.add('is-hidden');
  document.body.style.overflow = 'scroll';
  document.removeEventListener('keydown', onEscBtnPress);
  document.removeEventListener('click', onBackdropClick);
}

//Функція закриття по ESC
function onEscBtnPress(e) {
  if (e.code === 'Escape') {
    onCloseBtnClick();
  }
}

//Функція закриття модалки поза межами модалки
function onBackdropClick(e) {
  if (e.target === backdrop) {
    onCloseBtnClick();
  }
}

