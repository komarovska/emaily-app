import axios from 'axios';
import { createGetRequest, createPostRequest } from "./request";

let window;

const config = {
    local: 'http://localhost:5000',
    production: 'https://powerful-waters-41030.herokuapp.com'
}

export function resolveApi(apiConfig) {
    console.log(apiConfig);
    const env = typeof window !== 'undefined' ? window.ENV : process.env.ENV;
    if (env && apiConfig[env]) {
        return apiConfig[env];
    }

    return apiConfig.production;
}

export function resolveUrl(url) {
    const configUrl = resolveApi(config);
    console.log(`${configUrl}/${url}`);
    if (config && configUrl && url) {
        return `${configUrl}/${url}`;
    }

    return '';
}

export default class mongoApi {
    
    static sendMovie = data => {
        axios.post(resolveUrl('api/sendMovie'), { data });
}

    static getMovies = () => axios.get(resolveUrl('api/moviesList'));
}
