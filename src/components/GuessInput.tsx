import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { players } from '../constants/players';
import { GameContext } from '../contexts/GameContext';
import { Player } from '../types/Player';

export function GuessInput() {
  const { guesses, setGuesses } = useContext(GameContext);

  const { control, handleSubmit, setValue, setFocus } = useForm();

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>();

  const handleSearch = (userInput: string) => {
    if (userInput.length <= 1) {
      setFilteredPlayers(undefined);
      return;
    }

    // filter players
    const filtered = players
      .filter((player) =>
        player.name.toLowerCase().includes(userInput.toLowerCase())
      )
      .slice(0, 5);
    setFilteredPlayers(filtered);
  };

  const onSubmit = (data: any) => {
    // get player in players
    const playerGuessed = players.filter((player) =>
      player.name.toLowerCase().includes(data.guess.toLowerCase())
    )[0];

    if (playerGuessed.name.toLowerCase() === data.guess.toLowerCase()) {
      const newGuesses = [playerGuessed, ...guesses];
      setGuesses(newGuesses);
      setValue('guess', '');
      setFilteredPlayers(undefined);
    }
  };

  const handleAutoCompleteClick = (playerName: string) => {
    setValue('guess', playerName);
    setFilteredPlayers(undefined);
    setFocus('guess');
  };

  return (
    <Flex direction="column" align="center" width="100%" my={8}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} width="80%">
        <Controller
          name="guess"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Input
              ref={ref}
              value={value || ''}
              onChange={(e: any) => {
                handleSearch(e.target.value);
                onChange(e);
              }}
              maxW="360px"
              variant="unstyled"
              color="black"
              placeholder="Enter your guess"
              _placeholder={{
                color: 'gray.500',
              }}
              fontWeight="medium"
              fontSize="lg"
              bgColor="gray.50"
              height={16}
              px={4}
              transition="all 0.2s"
              _focus={{
                border: '1px solid black',
              }}
            />
          )}
        />
      </Box>
      {!!filteredPlayers && (
        <Flex
          direction="column"
          bgColor="white"
          maxWidth="320px"
          width="95%"
          borderBottomRadius={10}
        >
          {filteredPlayers?.map((player, index) => (
            <Text
              onClick={() => handleAutoCompleteClick(player.name)}
              key={index}
              borderRadius={10}
              fontSize={20}
              _hover={{
                cursor: 'pointer',
                bgColor: 'purple.100',
              }}
              px={2}
              py={3}
            >
              {player.name}
            </Text>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
