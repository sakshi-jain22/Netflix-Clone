import { fetchFromTMDB } from "../services/moviedb.service.js";

export const getTrendingMovie = async (request, response) => {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );

    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length) || 0];

    response.status(200).json({ success: true, content: randomMovie });
  } catch (error) {
    console.error("Error in getTrendingMovie: ", error);
    response
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getMovieTrailers = async (request, response) => {
  try {
    const { id } = request.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );

    response.status(200).json({ success: true, trailers: data.results });
  } catch (error) {
    console.error("Error in getMovieTrailers");
    if (error.message.includes(404)) {
      return response.status(404).send(null);
    }
    response
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getMovieDetails = async (request, response) => {
  try {
    const { id } = request.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );

    response.status(200).json({ success: true, content: data });
  } catch (error) {
    console.error("Error in getMovieDetails");
    if (error.message.includes(404)) {
      return response.status(404).send(null);
    }
    response
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getSimilarMovies = async (request, response) => {
  try {
    const { id } = request.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`
    );

    response.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    console.error("Error in getSimilarMovies: ", error.message);
    response
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const getMoviesByCategory = async (request, response) => {
  try {
    const { category } = request.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
    );

    response.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error("Error in getMoviesByCategory: ", error.message);
    response
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
