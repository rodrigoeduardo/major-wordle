import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GameContextProvider } from '../contexts/GameContext';

import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Who is? | Major Players</title>
        <link rel="shortcut icon" href="/assets/favicon.png" />
      </Head>
      <GameContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </GameContextProvider>
    </>
  );
}

export default MyApp;
