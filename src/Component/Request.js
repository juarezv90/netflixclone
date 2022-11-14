const key = "bc09d8f6d7221844a572405e063008e4";
const base = "https://api.themoviedb.org/3/movie/";


const request = {
    requestPopular: `${base}/popular?api_key=${key}&language=en-US&page=1`,
    requestTrending: `${base}/popular?api_key=${key}&language=en-US&page=2`
}

export default request;