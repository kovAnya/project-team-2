import { fetchMoviesTrending } from './fetchMoviesTrending';
import { getMovieGenres } from './genres';
import { btnColor } from './add_local_storage';
import {
  renderMoviesTrending,
  processingReleasedYear,
  processingGenre,
  processingNameFilm,
  processingPoster,
} from './renderMoviesTrending';
import { onWatchedBtnClick, onQueueBtnClick } from './add_local_storage';

const backdrop = document.querySelector('.modal__backdrop');
const filmsListRef = document.querySelector('.movies');
const closeBtnRef = document.querySelector('.closeModal');
const modal = document.querySelector('.modal__container');

let BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';
let fileSize = 'w400';
let stubPicture =
  'https://raw.githubusercontent.com/kovAnya/project-team-2/main/src/images/placeholder/no-image_desktop.webp';

////////////////////////////////Получаем данные с Локального Хранилища

function dataInLocalStorage() {
  let dataInLocalStorage = localStorage.getItem('dataInApi');
  let parsedDataInLocalStorage = '';

  try {
    return (parsedDataInLocalStorage = JSON.parse(dataInLocalStorage));
  } catch (error) {
    console.warn('Ошибка во время парса данных с локального хранилища');
  }
}
//////////////////////////////////////////////////////////

filmsListRef.addEventListener('click', onFilmCardClick);
closeBtnRef.addEventListener('click', onCloseBtnClick);

function onFilmCardClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscBtnPress);
  document.addEventListener('click', onBackdropClick);
  /////////Проверка id фильма по которому кликнули
  let idImage = e.target.dataset.id;
  let idImageNumber = Number(idImage);

  /////Данные с Локального хранилища
  let dataLocalStorage = dataInLocalStorage();
  let arrsFilm = dataLocalStorage.results; ////Обьект с 20 фильмами
  let changeFilm = arrsFilm.find(film => film.id === idImageNumber);

  ///////////////Переменные для отрисовки Модалки
  let poster_path = processingPoster(changeFilm.poster_path);
  let title = processingNameFilm(changeFilm.title, changeFilm.name);
  let vote_average = changeFilm.vote_average;
  let vote_count = changeFilm.vote_count;
  let popularity = changeFilm.popularity;
  let genre_ids = processingGenre(changeFilm.genre_ids);
  let overview = changeFilm.overview;

  modal.insertAdjacentHTML(
    'afterbegin',
    makeFilmModalMarkup(
      poster_path,
      title,
      vote_average,
      vote_count,
      popularity,
      genre_ids,
      overview
    )
  );
  const obj = {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
  };
  const btnWatch = document.querySelector('.btn__watch');
  const btnQueue = document.querySelector('.btn__queue');
  btnWatch.addEventListener('click', () => {
    btnQueue.textContent = 'You add film to watched';
    btnColor(btnWatch, btnQueue);
    onWatchedBtnClick(obj);
  });
  btnQueue.addEventListener('click', () => {
    btnWatch.textContent = 'You add film to queue ';
    btnColor(btnQueue, btnWatch);
    onQueueBtnClick(obj);
  });
}

function makeFilmModalMarkup(
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  genre_ids,
  overview
) {
  return `
  <div class="film__image">
  ${
    poster_path !== null
      ? `<img class="image" src="${BASE_URL_IMAGE}/${fileSize}/${poster_path}" alt=${title}/>`
      : ''
  }
    </div>
    <div class="film__information">
      <div>
        <h2 class="film__title">${title}</h2>
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
            <p>${title}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Genre</p>
            ${
              genre_ids.length !== 0
                ? `<p class="film__info">${genre_ids}</p>`
                : `<p class="film__info">No information</p>`
            }
          </li>
        </ul>
      </div>
      <div>
        <h3 class="film__about__title">About</h3>
        ${
          overview
            ? `<p class="film__about__text">${overview}</p>`
            : `<p class="film__about__text">No information</p>`
        }
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
