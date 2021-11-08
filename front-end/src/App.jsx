import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import useCombinedMovies from './hooks/useCombinedMovies';

function App() {
  const data = useCombinedMovies();
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Working
      </Box>
    </ChakraProvider>
  );
}

export default App;
