import React from 'react';
import propTypes from 'prop-types';
import {
  Box, Text, Badge, Center, HStack,
} from '@chakra-ui/react';
import useCheapest from '../../hooks/useCheapest';

const CardTable = ({ filmWorldPrice, cinemaWorldPrice }) => {
  const cheapest = useCheapest(filmWorldPrice, cinemaWorldPrice);
  return (
    <Box>
      <Center>
        <HStack>
          <Text align="center" fontSize="lg">
            Film World
          </Text>
          <Text>
            {filmWorldPrice.price}
          </Text>
          <Center>
            {cheapest.name === "Film World" && (
            <Badge data-testid="cin1Cheap" variant="solid" colorScheme="green">
              Cheap
            </Badge>
            )}
          </Center>
        </HStack>
      </Center>

      <Center>
        <HStack>
          <Text align="center" fontSize="lg">
            Cinema World
          </Text>
          <Text>
            {cinemaWorldPrice.price}
          </Text>
          <Center>
						{cheapest.name === "Cinema World" && (
							<Badge data-testid="cin2Cheap" variant="solid" colorScheme="green">
								Cheap
							</Badge>
							)}
          </Center>
        </HStack>
      </Center>
    </Box>
  );
};

CardTable.propTypes = {
  filmWorldPrice: propTypes.shape({
		name: propTypes.string,
		price: propTypes.number
	}).isRequired,
  cinemaWorldPrice: propTypes.shape({
		name: propTypes.string,
		price: propTypes.number
	}).isRequired,
};

export default CardTable;
