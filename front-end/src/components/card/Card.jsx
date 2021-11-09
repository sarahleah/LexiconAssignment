import React from 'react';
import propTypes from 'prop-types';
import { Box, Text, Image } from '@chakra-ui/react';
import CardTable from './CardTable';

const Card = ({ movieData }) => {
  return (
    <Box
      bg="white"
      maxW="xs"
      minW="4xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      color="black"
    >
      <Box>
        <Text data-testid="cardTitle" align="center" fontSize="2xl">
          {movieData.title}
        </Text>
      </Box>

      <Box>
        <Image src={movieData.poster} alt="" />
      </Box>

      <CardTable
        filmWorldPrice={movieData.prices[0]}
        cinemaWorldPrice={movieData.prices[1]}
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
