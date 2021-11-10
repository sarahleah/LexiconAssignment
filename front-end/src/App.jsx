import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Center,
  Text
} from '@chakra-ui/react';
import CardContainer from './components/CardContainer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Center>
          <Text 
            fontWeight="bold"
            fontSize="6xl" >Movie Comparison</Text>
        </Center>
      </Box>
      <Box textAlign="center" fontSize="xl">
        <CardContainer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
