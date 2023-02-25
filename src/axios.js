/* A library used to to make request to any server/ API endpoint
It is handling the API request from TMDB database */
import axios from "axios";

/* base url to make requests to the movie database for each genre*/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;