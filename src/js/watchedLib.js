import { openWatchedBtn } from './refs';
import {
  renderMoviesTrending,
  // processingReleasedYear,
  // processingGenre,
  // processingNameFilm,
  // processingPoster,
} from './renderMoviesTrending';

// import { onFilmCardClick, makeFilmModalMarkup } from './modal_film';

const moviesElement = document.querySelector('.movies');

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
// filmsListRef.addEventListener('click', onFilmCardClick);

const testResults = {
  results: [
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18],
      id: 66249,
      original_language: 'ta',
      original_title: 'வள்ளி',
      overview:
        'Valli returns to her village after studying for 15 years in the city. Her cousin celebrates her arrival to the city. He is in love with Valli from childhood days. But got changed after she went to study in the city. She is no more in love with him.She falls in love with a city guy called Shekar who came to the village with his friends for hunting. Shekar cheats her and escapes from the city. Later shekar was brought back by her cousin. Instead of marrying the city guy she kills him for cheating.',
      popularity: 1.176,
      poster_path: '/zKnaVI1qn6Rp5HJcN54eDyUotnW.jpg',
      release_date: '1993-08-20',
      title: 'Valli',
      video: false,
      vote_average: 4,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: '/9WluqTBRcQI2WL53ulGr2OT0ew5.jpg',
      genre_ids: [28, 18],
      id: 278056,
      original_language: 'ml',
      original_title: 'വല്ല്യേട്ടന്‍',
      overview:
        'Madhavankutty is the Valliettan (Big Brother) of the Arackal family. The long lasting rivalry between the Arackal Madhavanunni and Patteri Sivaraman forms the main thread of the story. Madhavanunni along with his four brothers he rules the village. But Sivaraman with the help of Bava develops their plan to trap Madhavanunni.',
      popularity: 1.4,
      poster_path: '/aKaJahWUUzZhTcR8tGpmieI8xpG.jpg',
      release_date: '2000-09-01',
      title: 'Valliettan',
      video: false,
      vote_average: 6.3,
      vote_count: 9,
    },
  ],
};

function onWatchedBtnClick() {
  moviesElement.innerHTML = '';
  renderMoviesTrending(testResults);
}
