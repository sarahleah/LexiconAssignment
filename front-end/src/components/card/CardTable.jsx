import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Text, Badge, Center, HStack,
} from '@chakra-ui/react';

const CardTable = ({ filmWorld, cinemaWorld }) => (
  <Box>
    <Center>
      <HStack>
        <Text align="center" fontSize="lg">
          Film World
        </Text>
        <Text>
          {filmWorld.price}
        </Text>
        <Center>
          <Badge data-testid="cin1Cheap" variant="solid" colorScheme="green">
            Cheap
          </Badge>
        </Center>
      </HStack>
    </Center>

    <Center>
      <HStack>
        <Text align="center" fontSize="lg">
          Cinema World
        </Text>
        <Text>
          {cinemaWorld.price}
        </Text>
        <Center>
          <Badge data-testid="cin2Cheap" variant="solid" colorScheme="green">
            Cheap
          </Badge>
        </Center>
      </HStack>
    </Center>
  </Box>
);

CardTable.propTypes = {
  filmWorld: PropTypes.object.isRequired,
  cinemaWorld: PropTypes.object.isRequired,
};

export default CardTable;
