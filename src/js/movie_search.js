// import { ApiKey } from './refs';

// const form = document.querySelector('header__form');
// const search = document.querySelector('.header__search');
// const value = search.value;
// const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${value}&page=1&include_adult=false`;

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const apiSearchUrl = `${SEARCH_URL}`;
//   if (value) {
//     getMovies(apiSearchUrl);

//     value = ''; //Clears the search bar
//   }
// });

// getMovies(SEARCH_URL);

// async function getMovies(url) {
//   const resp = await fetch(url, {headers:{"Content-Type": "application/json", Api-Key: ApiKey,},});
//   const respData = await resp.json();
//   showMovies(respData);
// }

// function showMovies(data) {
//   const moviesEl = document.querySelector('.movies');

//Сlearing previous movies

//   document.querySelector('.movies').innerHTML = '';

//   data.films.forEach(movie => {
//     const movieEl = document.createElement('div');
//     movieEl.classList.add('movie');
//     movieEl.innerHTML = ``;
//     moviesEl.appendChild(movieEl);
//   });
// }

// movie rating

// function getClassByRate(vote) {
//   if (vote >= 7) {
//     return 'green';
//   } else if (vote > 5) {
//     return 'orange';
//   } else {
//     return 'red';
//   }
// }

// function getMovies() {
//   fetch(`https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=${pageNumber}&include_adult=false&query=${inputValue}`)
//     .then(data => data.json())
//     .then(res => {
//       if (res.results.length === 0) {
//         pError.textContent = "Search result not successful. Enter the correct movie name and try again.";
//       }
//       if (res.results.length > 1) {
//         moviesList.innerHTML = "";
//         pError.textContent = "";
//       }
//       res.results.forEach(movie => {
//         moviesList.insertAdjacentElement('beforeend', createCardFunc(movie.backdrop_path, movie.title, movie.id))
//       })
//       renderFilms = res.results;
//       return renderFilms;
//     })
//     .catch(err => console.log(err));
// }

// async fetchMovieSearcher(text, page) {
//   try {
//     const { data } = await axios.get(
//       `${SEARCH_URL}?api_key=${ApiKey}&query=${text}&page=${page}`
//     );

//     return data;
//   } catch (error) {
//     console.error('Smth wrong with api search fetch' + error);
//   }
// }
