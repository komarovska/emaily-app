import {createGetRequest, createPostRequest} from "./request";

function resolveUrl(url) {
    return `http://localhost:5000/${url}`;
}

export default class mongoApi {
    static sendMovie = data => {
        console.log('mongoApi', data);
        createPostRequest(
            resolveUrl('api/sendMovie'),
            {
                body: data,
            },
        ).fetch();
    };

    static getMovies = () => {
        createGetRequest(
            resolveUrl('api/moviesList'),
            {}
        ).fetch();
    }
}
