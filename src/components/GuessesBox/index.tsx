import { Flex, Text, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { InfoBox } from './InfoBox';

export function GuessesBox() {
  const { correctPlayer } = useContext(GameContext);

  return (
    <VStack>
      <Flex direction="column">
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize={22}
          letterSpacing="0.1rem"
          color="purple.500"
        >
          FALLEN
        </Text>
        <Flex direction="column" textAlign="center">
          <InfoBox info="Denmark" type="nationality" />
          <InfoBox info="In-game leader" type="role" />
          <InfoBox info="$1,832,900" type="winnings" />
        </Flex>
      </Flex>
    </VStack>
  );
}
