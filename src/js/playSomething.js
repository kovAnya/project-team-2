import { fetchMoviesTrending } from './API/fetchMoviesTrending';
import {
  searchLocalQueue,
  searchLocalWatch,
  classListWatch,
  classListQueue,
} from './add_local_storage';
import {
  processingGenre,
  processingNameFilm,
  processingPoster,
  processingVoteAverage,
} from './renderMoviesTrending';
import { addLocal } from './add_local_storage';
import {
  playSomething,
  page,
  backdropEl,
  filmsListRef,
  closeBtnRef,
  modalFilm,
} from './refs';
import { onCloseCardBtnClick, FilmsInLocalStorage } from './usersLib';

let MovieList = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function searchPlaySomething(event) {
  let randomPage = getRandomInt(15);
  event.preventDefault();
  MovieList = await fetchMoviesTrending(randomPage + 1);
  let randomMovie = getRandomInt(20);
  console.log(MovieList[randomMovie]);

  if (localStorage.getItem('Watched')) {
    watchedStorageLength = FilmsInLocalStorage('Watched').length;
  }
  if (localStorage.getItem('Queue')) {
    queueStorageLength = FilmsInLocalStorage('Queue').length;
  }

  backdropEl.classList.remove('is-hidden');
  modalFilm.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscBtnPress);
  document.addEventListener('click', onBackdropClick);

  let poster_path = processingPoster(MovieList[randomMovie].poster_path);
  let title = processingNameFilm(
    MovieList[randomMovie].title,
    MovieList[randomMovie].name
  );
  let vote_average = processingVoteAverage(MovieList[randomMovie].vote_average);
  let vote_count = MovieList[randomMovie].vote_count;
  let popularity = MovieList[randomMovie].popularity;
  let genre_ids = processingGenre(MovieList[randomMovie].genre_ids);
  let overview = MovieList[randomMovie].overview;

  modalFilm.insertAdjacentHTML(
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

  const obj = addLocal(MovieList[randomMovie]);

  const btnWatch = document.querySelector('.btn__watch');
  const btnQueue = document.querySelector('.btn__queue');

  btnWatch.classList.remove('btn__watch__remove');
  btnQueue.classList.remove('btn__queue__remove');
  searchLocalQueue(obj, btnQueue, btnWatch);
  searchLocalWatch(obj, btnWatch, btnQueue);
  btnWatch.addEventListener('click', e => {
    classListWatch(btnWatch, obj);
  });
  btnQueue.addEventListener('click', () => {
    classListQueue(btnQueue, obj);
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
        ? `<img class="image" src="${poster_path}" alt=${title}/>`
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
          <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
          <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
          <button type="button" class="film__button btn__playsome">Next please</button>
        </div>
        </div>`;
}

function onCloseBtnClick() {
  const filmImg = document.querySelector('.film__image');
  const filmInfo = document.querySelector('.film__information');
  filmImg.remove();
  filmInfo.remove();
  if (
    filmsListRef.dataset.library === 'library' &&
    (watchedStorageLength !== FilmsInLocalStorage('Watched').length ||
      queueStorageLength !== FilmsInLocalStorage('Queue').length)
  ) {
    onCloseCardBtnClick();
  }
  backdropEl.classList.add('is-hidden');
  modalFilm.classList.add('is-hidden');
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
  if (e.target === backdropEl) {
    onCloseBtnClick();
  }
}

playSomething.addEventListener('click', searchPlaySomething);
