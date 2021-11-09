import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import CardContainer from './components/CardContainer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <CardContainer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
