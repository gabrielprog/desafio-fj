import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: 'bottom' } }}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
            <Home />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
