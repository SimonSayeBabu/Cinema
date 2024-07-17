function apiManager() {
    key = "92f0f56afffd55f39d43937ed6899e00";
    let URL = "https://api.themoviedb.org/3/";

    let request = {
        search, searchMovie, searchTV, searchPerson, popMovie, trendMovie, topMovie, upcomingMovie,
        getMovieCredits, popTV, todayTV, weekTV, topTV, getPeople, findPeopleName, getPeopleCreditsTV,
        getPeopleCreditsMovie, getTV, getMovie, getTagsTV, getTagsMovie, trendTV, getMovieVideo,
        getTvVideo, getTvCredits, discover, getPopularPeople
    };

    async function discover(media, input, page_index) { //multisearch
        return fetch(URL + "discover/" + media + "?include_adult=false&include_video=false&with_genres=" + input + "&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function search(input, page_index) { //multisearch
        return fetch(URL + "search/multi?query=" + input + "&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function searchMovie(input, page_index) {
        return fetch(URL + "search/movie?query=" + input + "&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function searchTV(input, page_index) {
        return fetch(URL + "search/tv?query=" + input + "&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function searchPerson(input, page_index) {
        return fetch(URL + "search/person?query=" + input + "&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    //Movie

    async function popMovie(page_index) {
        return fetch(URL + "movie/popular?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function trendMovie(page_index) {
        return fetch(URL + "trending/movie/week?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function topMovie(page_index) {
        return fetch(URL + "movie/top_rated?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function upcomingMovie(page_index) {
        let date = new Date();
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //Janvier c'est 0 !!!! (de 0 à 11)
        let yyyy = date.getFullYear();
        date = yyyy + '-' + mm + '-' + dd;
        return fetch(URL + "discover/movie?&primary_release_date.gte=" + date + "&sort_by=popularity.desc&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getMovieCredits(id) {
        return fetch(URL + "movie/" + id + "/credits?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getMovieVideo(id) {
        return fetch(URL + "movie/" + id + "/videos?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    //TV

    async function popTV(page_index) {
        return fetch(URL + "tv/popular?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function todayTV(page_index) {
        return fetch(URL + "tv/airing_today?&api_key=" + key + "&page=" + page_index + "&sort_by=popularity.desc&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function weekTV(page_index) {
        return fetch(URL + "tv/on_the_air?&api_key=" + key + "&page=" + page_index + "&sort_by=popularity.desc&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function topTV(page_index) {
        return fetch(URL + "tv/top_rated?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function trendTV(page_index) {
        return fetch(URL + "trending/tv/day?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getTvCredits(id) {
        return fetch(URL + "tv/" + id + "/credits?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getTvVideo(id) {
        return fetch(URL + "tv/" + id + "/videos?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    //Peopleperson/popular

    async function getPopularPeople(page_index) {
        return fetch(URL + "person/popular?&page=" + page_index + "&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getPeople(id) {
        return fetch(URL + "person/" + id + "?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function findPeopleName(name, page_index) {
        return fetch(URL + "search/person?query=" + name + "?&api_key=" + key + "&page=" + page_index + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getPeopleCreditsTV(id) {
        return fetch(URL + "person/" + id + "/tv_credits?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getPeopleCreditsMovie(id) {
        return fetch(URL + "person/" + id + "/movie_credits?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getTV(id) {
        return fetch(URL + "tv/" + id + "?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getMovie(id) {
        return fetch(URL + "movie/" + id + "?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getTagsTV(id) {
        return fetch(URL + "genre/tv/list?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }

    async function getTagsMovie(id) {
        return fetch(URL + "genre/movie/list?&api_key=" + key + "&language=fr")
            .then(response => response.json())
            .then(data => data);
    }


    // TAGGED IMAGES ??

    return request;

}