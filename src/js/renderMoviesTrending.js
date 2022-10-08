import { fetchMoviesTrending } from "./fetchMoviesTrending";

export   async function renderMoviesTrending(){
        try{
            const data = await fetchMoviesTrending();
            console.log(data);
        } catch(error) {
            console.log(error.message)
        }
    }

    renderMoviesTrending()
