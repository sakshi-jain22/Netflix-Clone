import { fetchFromTMDB } from '../services/moviedb.service.js';

export const getTrendingTv = async (request, response) => {
  try {
    const data = await fetchFromTMDB(
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    );

    const randomTv =
      data.results[Math.floor(Math.random() * data.results?.length) || 0];

    response.status(200).json({ success: true, content: randomTv });
  } catch (error) {
    console.error('Error in getTrendingTv: ', error);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const getTvTrailers = async (request, response) => {
  try {
    const { id } = request.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
    );

    response.status(200).json({ success: true, trailers: data.results });
  } catch (error) {
    console.error('Error in getTvTrailers');
    if (error.message.includes(404)) {
      return response.status(404).send(null);
    }
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const getTvDetails = async (request, response) => {
  try {
    const { id } = request.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    );

    response.status(200).json({ success: true, content: data });
  } catch (error) {
    console.error('Error in getTvDetails');
    if (error.message.includes(404)) {
      return response.status(404).send(null);
    }
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const getSimilarTvs = async (request, response) => {
  try {
    const { id } = request.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
    );

    response.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    console.error('Error in getSimilarTvs: ', error.message);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const getTvsByCategory = async (request, response) => {
  try {
    const { category } = request.params;

    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`,
    );

    response.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error('Error in getTvsByCategory: ', error.message);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
