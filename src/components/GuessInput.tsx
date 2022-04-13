import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GameContext } from "../contexts/GameContext";
import { Player } from "../types/Player";

export function GuessInput() {
  // temporary players array
  const players: Player[] = [
    {
      id: 0,
      name: "device",
      link: "https://liquipedia.net/counterstrike/Device",
      nationality: "Denmark",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/4/46/Dev1ce_%40_PGL_Major_Stockholm_2021.jpg/600px-Dev1ce_%40_PGL_Major_Stockholm_2021.jpg",
      role: "AWPer",
      totalWinnings: "$1,949,050",
    },
    {
      id: 1,
      name: "dupreeh",
      link: "https://liquipedia.net/counterstrike/Dupreeh",
      nationality: "Denmark",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/4/4d/Dupreeh_%40_PGL_Major_Stockholm_2021.jpg/600px-Dupreeh_%40_PGL_Major_Stockholm_2021.jpg",
      role: "Rifler",
      totalWinnings: "$1,970,873",
    },
    {
      id: 61,
      name: "dennis",
      link: "https://liquipedia.net/counterstrike/Dennis",
      nationality: "Sweden",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/7/73/Dennis_%40_EPICENTER_2018.jpg/600px-Dennis_%40_EPICENTER_2018.jpg",
      role: "In-game leader",
      totalWinnings: "$364,125",
    },
    {
      id: 62,
      name: "KRIMZ",
      link: "https://liquipedia.net/counterstrike/KRIMZ",
      nationality: "Sweden",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/b/b4/KRIMZ_%40_IEM_Katowice_2022.jpg/600px-KRIMZ_%40_IEM_Katowice_2022.jpg",
      role: "Rifler",
      totalWinnings: "$920,551",
    },
    {
      id: 63,
      name: "Maikelele",
      link: "https://liquipedia.net/counterstrike/Maikelele",
      nationality: "Sweden",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/6/68/Maikelele_DreamHack_Open_Sevilla_2019.jpg/600px-Maikelele_DreamHack_Open_Sevilla_2019.jpg",
      role: "AWPer",
      totalWinnings: "$131,649",
    },
    {
      id: 311,
      name: "boltz",
      link: "https://liquipedia.net/counterstrike/Boltz",
      nationality: "Brazil",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/6/68/Boltz_%40_IEM_Cologne_2021.jpg/600px-Boltz_%40_IEM_Cologne_2021.jpg",
      role: "Rifler",
      totalWinnings: "$382,922",
    },
    {
      id: 312,
      name: "FalleN",
      link: "https://liquipedia.net/counterstrike/FalleN",
      nationality: "Brazil",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/7/7b/FalleN_%40_PGL_Major_Stockholm_2021.jpg/600px-FalleN_%40_PGL_Major_Stockholm_2021.jpg",
      role: "In-game leader",
      totalWinnings: "$1,125,229",
    },
    {
      id: 313,
      name: "fer",
      link: "https://liquipedia.net/counterstrike/Fer",
      nationality: "Brazil",
      photoURL:
        "https://liquipedia.net/commons/images/thumb/5/5e/Fer_%40_EPL_S10_Finals.jpg/600px-Fer_%40_EPL_S10_Finals.jpg",
      role: "Rifler",
      totalWinnings: "$1,045,102",
    },
  ];

  const { guesses, setGuesses } = useContext(GameContext);

  const { control, handleSubmit, setValue, setFocus } = useForm();

  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>();

  const handleSearch = (userInput: string) => {
    if (userInput.length <= 1) {
      setFilteredPlayers(undefined);
      return;
    }

    // filter players
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(userInput.toLowerCase())
    );
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
      setValue("guess", "");
      setFilteredPlayers(undefined);
    }
  };

  const handleAutoCompleteClick = (playerName: string) => {
    setValue("guess", playerName);
    setFilteredPlayers(undefined);
    setFocus("guess");
  };

  return (
    <Flex direction="column" align="center" width="100%" my={8}>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width="100%"
        align="center"
      >
        <Controller
          name="guess"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Input
              ref={ref}
              value={value || ""}
              onChange={(e: any) => {
                handleSearch(e.target.value);
                onChange(e);
              }}
              maxW="360px"
              width="80%"
              variant="unstyled"
              color="black"
              placeholder="Enter your guess"
              _placeholder={{
                color: "gray.500",
              }}
              fontWeight="medium"
              fontSize="lg"
              bgColor="purple.50"
              height={16}
              px={4}
              transition="all 0.2s"
              _focus={{
                border: "1px solid white",
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
                cursor: "pointer",
                bgColor: "purple.100",
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
