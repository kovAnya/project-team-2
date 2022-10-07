
// import { ApiKey } from './refs'

const API_KEY = '3ec430a354e7116e3d9f9a41b82b2275';
const BASE_URL_TO_QUERY_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';

const LOCAL_KEY_GENRES = 'genresOfFilms';

// Запрос жанров 
async function fetchGenres() {
    const response = await fetch(`${BASE_URL_TO_QUERY_GENRES}${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
};

// Функция сохранения в локальное хранилище списка жанров
async function saveMovieGenresInStorage() {
    try {
        const {genres}  = await fetchGenres();
        console.log('response', genres);
        localStorage.setItem(LOCAL_KEY_GENRES, JSON.stringify(genres));
    }
    catch (error) {
        console.log(error)
    }
}

// Выбор нужного жанра (по id) из списка в локальном хранилище
function getMovieGenres(id) {
    const listOfAllMovieGenres = localStorage.getItem(LOCAL_KEY_GENRES);
    const allMovieGenres = JSON.parse(listOfAllMovieGenres);
        for (const movieGenre of allMovieGenres) {
            if (movieGenre.id === id) {
                console.log('name', movieGenre.name);
                return movieGenre.name;
            }
            console.log('неизвестен')
        }
}

// ___.addEventListener('click', saveMovieGenresInStorage);
// getMovieGenres();

