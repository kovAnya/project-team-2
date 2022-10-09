import { fetchMoviesTrending } from "./fetchMoviesTrending";
import {card} from "./oneCard";
import {getMovieGenres} from "./genres"

const moviesElement = document.querySelector('.movies');

let BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';
let fileSize = 'original';


export   async function renderMoviesTrending(dataFromServer){
        try{
            let data = await dataFromServer;
            let arrsFilm = data.results

            console.log(arrsFilm)
            arrsFilm.map(({poster_path, title, name, genre_ids, release_date, first_air_date}) => {
            let poster = `${BASE_URL_IMAGE}/${fileSize}/${poster_path}`;
            let genre = [];
            let releasedYear ="";
            let cardFilm = "";

            if(release_date){            
                let ReleasedData = release_date.split("")
                releasedYear = ReleasedData.splice(0, 4).join("");
            } else {
                let ReleasedData = first_air_date.split("")
                releasedYear = ReleasedData.splice(0, 4).join("");
            }

            for(const ids of genre_ids) {
                if(getMovieGenres(ids)){
                genre.push(` ${getMovieGenres(ids)}`)
                }
             }


            if(title) {
             cardFilm = card(poster, title, genre, releasedYear);
            } else {
             cardFilm = card(poster, name, genre, releasedYear)
            }
             moviesElement.insertAdjacentHTML("beforeend", cardFilm);

            })
            
        } catch(error) {
            console.log(error.message)
        }
    }

    
