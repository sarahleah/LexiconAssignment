import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import useMovies from './hooks/useMovies';

function App() {
  const { filmworldMovies, cinemaWorldMovies } = useMovies();

  console.log(filmworldMovies, cinemaWorldMovies);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        Working
      </Box>
    </ChakraProvider>
  );
}

export default App;
