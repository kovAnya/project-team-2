import { fetchMoviesTrending } from './fetchMoviesTrending';
import { card } from './oneCard';
import { getMovieGenres } from './genres';

///////////////Елемент одной карточки в HTML документе
const moviesElement = document.querySelector('.movies');
///////////////////////////////////////////////////////

////////////////Путь и размер запроса картинок
let BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';
let fileSize = 'w400';
///////////////////////////////////////////////

///////////////Функция рендеринга 1 карточки фильма
export async function renderMoviesTrending(dataFromServer) {
  try {
    let data = await dataFromServer;
    let arrsFilm = data.results; ////Обьект с 20 фильмами

    arrsFilm.map(
      (
        { poster_path, title, name, genre_ids, release_date, first_air_date } ////Перебираем каждый фильм и берем данные
      ) => {
        let poster = `${BASE_URL_IMAGE}/${fileSize}/${poster_path}`; ////Картинка фильма
        let genre = []; /// Жанры фильма
        let releasedYear = ''; /// Год релиза
        let cardFilm = ''; /// Обьявление переменной для карточки фильма

        if (release_date) {
          /// Если в данных есть значение release_date то данный год берем с него
          let ReleasedData = release_date.split('');
          releasedYear = ReleasedData.splice(0, 4).join('');
        } else if (first_air_date) {
          let ReleasedData = first_air_date.split(''); /// Если нет release_date то берем год с first_air_date
          releasedYear = ReleasedData.splice(0, 4).join('');
        } else {
          releasedYear = '';
        }

        for (const ids of genre_ids) {
          if (getMovieGenres(ids)) {
            /// Если id жанра есть в списке жанров то добавляем в карточку, если нет то не добавляем
            genre.push(` ${getMovieGenres(ids)}`);
          }
        }

        if (title) {
          /// Название фильма берем с title
          cardFilm = card(poster, title, genre, releasedYear);
        } else {
          cardFilm = card(poster, name, genre, releasedYear); //// Если нет title в данных то берем с name
        }
        moviesElement.insertAdjacentHTML('beforeend', cardFilm); /// Добавляем сформированную карточку в HTML код
      }
    );
  } catch (error) {
    console.log(error.message);
  }
}
