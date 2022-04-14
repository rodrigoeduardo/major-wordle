import { Flex, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Player } from '../../types/Player';
import { InfoBox } from './InfoBox';

export function GuessesBox() {
  const { guesses } = useContext(GameContext);

  return (
    <VStack spacing={6}>
      {guesses.map((guess: Player) => (
        <Flex key={guess.id} direction="column">
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={22}
            letterSpacing="0.1rem"
            color="gray.50"
          >
            {guess.name.toUpperCase()}
          </Text>
          <Flex direction="column" textAlign="center" mt={1}>
            <InfoBox info={guess.nationality} type="nationality" />
            <InfoBox info={guess.role} type="role" />
            <InfoBox info={guess.totalWinnings} type="winnings" />
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
}
