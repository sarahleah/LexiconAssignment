import React from 'react';
import propTypes from 'prop-types';
import {
  Box, Table, Tbody
} from '@chakra-ui/react';
import useCheapest from '../../hooks/useCheapest';
import CardTableRow from './CardTableRow'

const CardTable = ({ filmWorld, cinemaWorld }) => {

  const cheapest = useCheapest(filmWorld, cinemaWorld);

  return (
    <Box>
			<Table>
				<Tbody>
					<CardTableRow
						testid="cin1"
						name={filmWorld.name}
						price={filmWorld.price}
						isCheapest={cheapest.name === filmWorld.name}
					/>

					<CardTableRow 
						testid="cin2"
						name={cinemaWorld.name}
						price={cinemaWorld.price}
						isCheapest={cheapest.name === cinemaWorld.name}
					/>
				</Tbody>
			</Table>
    </Box>
  );
};

CardTable.propTypes = {
  filmWorld: propTypes.shape({
		name: propTypes.string,
		price: propTypes.number
	}).isRequired,
  cinemaWorld: propTypes.shape({
		name: propTypes.string,
		price: propTypes.number
	}).isRequired,
};

export default CardTable;
