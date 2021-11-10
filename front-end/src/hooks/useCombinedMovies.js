import useMovies from './useMovies';
import movieCombiner from '../helpers/movieCombiner'

export default function useCombinedMovies() {
	const { filmWorldMovies, cinemaWorldMovies } = useMovies()
	
	if ([filmWorldMovies, cinemaWorldMovies].some((provider) => provider.isError)){
		return {
			isSuccess: false,
			isError: true,
			isLoading: false,
			data: undefined
		}
	}
	else if ([filmWorldMovies, cinemaWorldMovies].some((provider) => provider.isLoading)){
		return {
			isSuccess: false,
			isError: false,
			isLoading: true,
			data: undefined
		}
	}
	else {
		return {
			isSuccess: true,
			isError: false,
			isLoading: false,
			data: movieCombiner([filmWorldMovies.data, cinemaWorldMovies.data])
		}
	}
}
