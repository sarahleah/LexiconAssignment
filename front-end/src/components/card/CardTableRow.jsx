import propTypes from 'prop-types';
import { Text, Badge, Center, Td, Tr } from '@chakra-ui/react';
import priceFormatter from '../../helpers/priceFormatter'

const CardTableRow = ({ name, price, isCheapest, testid }) => {
  return (
			<Tr>
				<Td>
					<Text align="center" fontSize="lg">
						{name}
					</Text>
				</Td>
				<Td>
					<Text data-testid={`${testid}Price`}>{priceFormatter(price)}</Text>
				</Td>
        <Td>
					<Center>
						{isCheapest && (
							<Badge data-testid={`${testid}Cheap`} variant="solid" colorScheme="green">
								Cheap
							</Badge>
						)}
					</Center>
				</Td>
			</Tr>
  );
};

CardTableRow.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  isCheapest: propTypes.bool.isRequired,
};

export default CardTableRow;
