import axios from 'axios';
import { formatMoviesURL } from '../helpers/formatURL';

async function fetchMovies(provider) {
  const { data } = await axios.get(formatMoviesURL(provider), {
    headers: { 'x-api-key': process.env.REACT_APP_LEXICON_KEY },
  });
  return data;
}

export default fetchMovies;
