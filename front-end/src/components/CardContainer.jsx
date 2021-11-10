import React from 'react';
import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import useCombinedMovies from '../hooks/useCombinedMovies'
import Card from './card/Card'

const CardContainer = () => {
	const {isLoading, isError, data} = useCombinedMovies();

	if (isError) {
		return (
			<Box>
				Error Loading Movies
			</Box>
		)
	}
	else if (isLoading){
		return (
			<Box>
				Loading Movies...
			</Box>
		)
	}

	const generateMovieCards = (data) => {
		return data.map((movie) => {
			return (
				<Card 
					key={movie.id}
					movieData={
						movie
					}
				/>
			)
		})
	}

	return ( 
		<Box>
			<Center>
				<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
					{generateMovieCards(data)}
				</SimpleGrid>
			</Center>
		</Box>
	 );
}
 
export default CardContainer;