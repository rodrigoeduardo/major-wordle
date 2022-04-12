import { Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { GuessesBox } from '../components/GuessesBox';
import { GuessInput } from '../components/GuessInput';

const Home: NextPage = () => {
  return (
    <Flex
      mx="auto"
      align="center"
      h="100vh"
      flexDir="column"
      w="100%"
      px="2rem"
      maxWidth="520px"
    >
      <Text fontSize={48} fontWeight="bold" color="purple.500">
        cs:go wordle
      </Text>

      <GuessInput />

      <GuessesBox />
    </Flex>
  );
};

export default Home;
