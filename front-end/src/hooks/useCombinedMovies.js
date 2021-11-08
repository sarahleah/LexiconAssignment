import { useState, useEffect } from 'react';
import useMovies from './useMovies';

export default function useCombinedMovies() {
	const { filmWorldMovies, cinemaWorldMovies} = useMovies()
	
	if (filmWorldMovies.isError || cinemaWorldMovies.isError){
		return {
			isError: true,
			isLoading: false,
			data: undefined
		}
	}
	else if (filmWorldMovies.isLoading || cinemaWorldMovies.isLoading){
		return {
			isError: false,
			isLoading: true,
			data: undefined
		}
	}
	else {
		return {
			isError: false,
			isLoading: false,
			data: "yee"
		}
	}
}
