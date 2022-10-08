const axios = require('axios').default;

const URL = 'https://api.themoviedb.org/3/trending';
const API_KEY = '3ec430a354e7116e3d9f9a41b82b2275';

let mediaType = 'all';
let timeWindow = 'day';
let page = 1

export async function fetchMoviesTrending () {
    
try{
    const responce = await axios.get(`${URL}/${mediaType}/${timeWindow}?api_key=${API_KEY}&page=${page}`);
    return responce.data;
} catch (error) {
    console.error(error);
}

}
