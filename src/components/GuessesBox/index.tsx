import { Flex, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { Player } from "../../types/Player";
import { InfoBox } from "./InfoBox";

export function GuessesBox() {
  const { guesses } = useContext(GameContext);

  return (
    <VStack>
      {guesses.map((guess: Player) => (
        <Flex key={guess.id} direction="column">
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={22}
            letterSpacing="0.1rem"
            color="purple.500"
          >
            {guess.name}
          </Text>
          <Flex direction="column" textAlign="center">
            <InfoBox info={guess.nationality} type="nationality" />
            <InfoBox info={guess.role} type="role" />
            <InfoBox info={guess.totalWinnings} type="winnings" />
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
}
