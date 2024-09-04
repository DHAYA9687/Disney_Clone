import axios from "axios";
// const api_key = "403d7389bae3cad899b21628af4aa42b";
// const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_API_KEY;
const movieBaseUrl = import.meta.env.VITE_MOVIEBASE_URL;
const getTrendingVideos = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesByGenre = async (genreId) => {
  try {
    const response = await axios.get(`${movieBaseUrl}/discover/movie`, {
      params: {
        api_key: api_key,
        with_genres: genreId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
  }
};

export default { getTrendingVideos, getMoviesByGenre };
