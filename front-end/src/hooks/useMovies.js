import { useQuery } from 'react-query';
import fetchMovies from '../api/fetchMovies';

export default () => ({
  filmworldMovies: useQuery('filmworld', () => fetchMovies('filmworld')),
  cinemaworldMovies: useQuery('cinemaworld', () => fetchMovies('cinemaworld')),
});
