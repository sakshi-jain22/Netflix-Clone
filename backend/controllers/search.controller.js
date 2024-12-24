import { User } from '../models/user.model.js';
import { fetchFromTMDB } from '../services/moviedb.service.js';

export const searchPerson = async (request, response) => {
  const { query } = request.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`,
    );

    if (!data.results.length) {
      return response.status(404).send(null);
    }

    // To add search data in user's search history
    await User.findByIdAndUpdate(request.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          searchType: 'person',
          createdAt: new Date(),
        },
      },
    });

    response.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error('Error in searchPerson: ', error.message);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const searchMovie = async (request, response) => {
  const { query } = request.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    );

    if (!data.results.length) {
      return response.status(404).send(null);
    }

    // To add search data in user's search history
    await User.findByIdAndUpdate(request.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].title,
          searchType: 'movie',
          createdAt: new Date(),
        },
      },
    });

    response.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error('Error in searchMovie: ', error.message);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const searchTv = async (request, response) => {
  const { query } = request.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    );

    if (!data.results.length) {
      return response.status(404).send(null);
    }

    // To add search data in user's search history
    await User.findByIdAndUpdate(request.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].name,
          searchType: 'Tv',
          createdAt: new Date(),
        },
      },
    });

    response.status(200).json({ success: true, content: data.results });
  } catch (error) {
    console.error('Error in searchTv: ', error.message);
    response
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};
