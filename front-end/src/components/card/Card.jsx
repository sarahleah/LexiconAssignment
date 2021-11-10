import React from 'react';
import propTypes from 'prop-types';
import { Box, Text, Image, Center } from '@chakra-ui/react';
import CardTable from './CardTable';

const Card = ({ movieData }) => {
  return (
    <Box
      bg="white"
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      color="black"
    >
      <Box minH={20} mt={2}>
        <Text 
          fontWeight="bold"
          data-testid="cardTitle" 
          align="center" 
          fontSize="2xl">
          {movieData.title}
        </Text>
      </Box>

      <Box minH={465}>
        <Center>
          <Image src={movieData.poster} alt="" />
        </Center>
      </Box>

      <CardTable
        filmWorld={movieData.prices[0]}
        cinemaWorld={movieData.prices[1]}
      />
    </Box>
)};

Card.propTypes = {
  movieData: propTypes.shape({
    title: propTypes.string,
    poster: propTypes.string, //Must be valid URL
    actors: propTypes.string,
    price: propTypes.array,
  }).isRequired,
};

export default Card;
