const API_KEY="cf2c562eb5915d7db3a4e5377ee144d5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchBecauseYouWatchThis: `/movie/14544/similar?api_key=${API_KEY}`,
    fetchRecomendedForYou: `/movie/1455/recommendations?api_key=${API_KEY}`,

    //https://api.themoviedb.org/3/movie/14544/similar?api_key=cf2c562eb5915d7db3a4e5377ee144d5\
};

export default requests;
