import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Image } from '@chakra-ui/react';
import CardTable from './CardTable';

const Card = ({ cinemas, movieTitle }) => (
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
      <Image src="https://via.placeholder.com/380" alt="" />
    </Box>

    <Box>
      <Text align="center" fontSize="2xl">
        {movieTitle}
      </Text>
    </Box>

    <CardTable
      filmworld={cinemas.filmworld}
      cinemaworld={cinemas.cinemaworld}
    />
  </Box>
);

Card.propTypes = {
  cinemas: PropTypes.shape({
    filmWorld: PropTypes.object.isRequired,
    cinemaWorld: PropTypes.object.isRequired,
  }).isRequired,
  movieTitle: PropTypes.string.isRequired,
};

export default Card;
