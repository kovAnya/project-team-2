import { ApiKey, page } from './refs';
import { pagination } from './pagination';
import { fetchMoviesTrending } from './fetchMoviesTrending';
import { onScroll, onToTopBtn } from './scroll';
import { renderMoviesTrending } from './renderMoviesTrending';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { loader } from './refs';

const axios = require('axios').default;

import Notiflix from 'notiflix';



import { renderMoviesTrending } from './renderMoviesTrending';

const searchFilmForm = document.querySelector('.header__form');
const searchFilmInput = document.querySelector('.header__form-input');
const moviesElement = document.querySelector('.movies');


searchFilmInput.addEventListener("input", onTexterialInput);

let inputValue = '';
let searchFilms = true;



// const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=1&include_adult=false`;


  

export async function fetchFilms(page) {
  
  try {
    const fetchResult = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`
    );

    // Loading.remove();
    searchFilms = false;
    if (page === 1) {
      pagination.reset(fetchResult.data.total_results);
    }else if (!data || data.length === 0) {
        Notiflix.Notify.failure(
                'Search result not successful. Enter the correct movie name and try again.'
            );
          } 
    
          console.log(fetchResult.data);
          return fetchResult.data.results;
  } catch (error) {
    Loading.remove();
           Notiflix.Notify.failure('You havent added any movies yet. Please use search to find relevant movies.');
              return [];
  }
  
      }
   
   

async function searchFilm(e) {
  e.preventDefault();

  
  
  inputValue = searchFilmInput.value;
  console.log(searchFilmInput.value);
  searchFilmForm.reset();
  moviesElement.innerHTML = '';
  await renderMoviesTrending(fetchFilms(page));
  // loader.classList.add('loader-hidden');
  
  
 
//  Loading.hourglass({
//             svgColor: "rgb(255, 106, 0)",
//             backgroundColor: "rgba(0,0,0,0)", 
             
//         });
     

    
   
  // Всплывающие уведомления с помощью Notiflix
  // try {
        
  //       if (total_results.page === 0) {
  //           Notiflix.Notify.info(
  //               'You havent added any movies yet. Please use search to find relevant movies.'
  //           );
  //       }
  //   }

  //   catch {

  //       Notiflix.Notify.failure('Search result not successful. Enter the correct movie name and try again.');
  //       return [];
           
  //   }   
    
}



pagination.on('afterMove', event => {
  const currentPage = event.page;
  moviesElement.innerHTML = '';
  if (searchFilms) {
    renderMoviesTrending(fetchMoviesTrending(currentPage));
  } else {
    renderMoviesTrending(fetchFilms(currentPage));
  }
  onScroll();
  onToTopBtn();
});

searchFilmForm.addEventListener('submit', searchFilm);

