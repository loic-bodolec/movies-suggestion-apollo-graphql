import axios from 'axios';
import dotenv from 'dotenv';
import { movies } from '../db/movies.js';

dotenv.config();

export default {
  Query: {
    random: async () => {
      try {
        const movie = movies[Math.floor(Math.random() * movies.length)];
        const giphy = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.API_GIPHY_KEY}=${movie.name}`);

        const top = giphy.data.data.length > 10 ? 10 : giphy.data.data.length;

        return {
          ...movie,
          gif: giphy.data.data[Math.floor(Math.random() * top)].images.original.url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
