import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { GameContextProvider } from '../contexts/GameContext';

import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GameContextProvider>
  );
}

export default MyApp;
