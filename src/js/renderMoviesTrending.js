import { fetchMoviesTrending } from "./fetchMoviesTrending";

export   async function renderMoviesTrending(dataFromServer){
        try{
            const data = await dataFromServer;
            console.log(data)
        } catch(error) {
            console.log(error.message)
        }
    }

    
