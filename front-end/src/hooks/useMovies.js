import { useQuery } from 'react-query';
import fetchMovies from '../api/fetchMovies';

export default () => ({
  filmWorldMovies: useQuery('filmworld', () => fetchMovies('filmworld')),
  cinemaWorldMovies: useQuery('cinemaworld', () => fetchMovies('cinemaworld')),
});
