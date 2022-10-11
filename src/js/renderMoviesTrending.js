import { fetchMoviesTrending } from './fetchMoviesTrending';
import { card } from './oneCard';
import { getMovieGenres } from './genres';

///////////////Елемент одной карточки в HTML документе
const moviesElement = document.querySelector('.movies');
///////////////////////////////////////////////////////

////////////////Путь и размер запроса картинок + заглушка картинки
let BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';
let fileSize = 'w400';
let stubPictures ='https://img.myloview.com/posters/no-image-400-148613.jpg';
///////////////////////////////////////////////

///////////////////////////////////////Функция которая берет только год из данных с сервера
export function processingReleasedYear (release_date, first_air_date) {
 if (release_date) {
    /// Если в данных есть значение release_date то данный год берем с него
    let ReleasedData = release_date.split('');
   return ReleasedData.splice(0, 4).join('');
  } else if (first_air_date) {
    let ReleasedData = first_air_date.split(''); /// Если нет release_date то берем год с first_air_date
   return ReleasedData.splice(0, 4).join('');
  } else {
   return '';
  }
}
//////////////////////////////////////////////////

/////////////////////////////////////////////////////Функция которая id жанров превращает в название жанров
export function processingGenre(genre_ids) {
  let genres = [];

  for (const ids of genre_ids) {
    if (getMovieGenres(ids)) {
      let genre = getMovieGenres(ids);
      /// Если id жанра есть в списке жанров то добавляем в карточку, если нет то не добавляем
      genres.push(` ${genre}`)
    }
  }

  return genres;
}

/////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////Функция возврата названия фильма из данных с сервера
export function processingNameFilm (title, name) {
  if (title) {
    /// Название фильма берем с title
    return title
  } else if(name) {
    return name; //// Если нет title в данных то берем с name
  } else {
    return 'Название фильма не найденно'
  }
  }
//////////////////////////////////////////////////////////////////////////////


///////////////////////////////////Данные с сервира закидываем в Локальное хранилище
export async function saveInLocalStorage(dataFromServer) {
  let data = await dataFromServer;
  let dataJSON = JSON.stringify(data)

  localStorage.setItem("dataInApi", dataJSON)
}
///////////////////////////////////////////////////////////////////


///////////////Функция рендеринга 1 карточки фильма
export async function renderMoviesTrending(dataFromServer) {
  try {
    let data = await dataFromServer;

    saveInLocalStorage(dataFromServer)

    let arrsFilm = data.results; ////Обьект с 20 фильмами

    arrsFilm.map(
      (
        { poster_path, title, name, genre_ids, release_date, first_air_date, id } ////Перебираем каждый фильм и берем данные
      ) => {

        let poster = '';
        let genres = []; /// Жанры фильма
        let releasedYear = ''; /// Год релиза
        let cardFilm = ''; /// Обьявление переменной для карточки фильма
        let nameFilm = '';

        if(poster_path) {
          poster = `${BASE_URL_IMAGE}/${fileSize}/${poster_path}`; ////Картинка фильма
        } else {
          poster = stubPictures;
        }

        releasedYear = processingReleasedYear (release_date, first_air_date);
        genres = processingGenre(genre_ids);
        nameFilm = processingNameFilm (title, name);

        cardFilm = card(poster, nameFilm, genres, releasedYear, id)

        moviesElement.insertAdjacentHTML('beforeend', cardFilm); /// Добавляем сформированную карточку в HTML код
      }
    );
  } catch (error) {
    console.log(error.message);
  }
}
