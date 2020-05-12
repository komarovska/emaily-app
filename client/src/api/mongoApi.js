import axios from 'axios';
import {createGetRequest, createPostRequest} from "./request";

function resolveUrl(url) {
    return `http://localhost:5000/${url}`;
}

export default class mongoApi {

    static sendMovie = data => {
        axios.post(resolveUrl('api/sendMovie'), { data });
}

    static getMovies = () => fetch(resolveUrl('api/moviesList'));
}
