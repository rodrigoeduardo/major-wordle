import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { GuessesBox } from "../components/GuessesBox";
import { GuessInput } from "../components/GuessInput";
import { DefeatModal } from "../components/Modals/DefeatModal";
import { TutorialModal } from "../components/Modals/TutorialModal";
import { VictoryModal } from "../components/Modals/VictoryModal";
import { GameContext } from "../contexts/GameContext";

const Home: NextPage = () => {
  const { hasWon, hasLost } = useContext(GameContext);

  const {
    isOpen: isOpenVictory,
    onOpen: openVictoryModal,
    onClose: closeVictoryModal,
  } = useDisclosure();

  const {
    isOpen: isOpenDefeat,
    onOpen: openDefeatModal,
    onClose: closeDefeatModal,
  } = useDisclosure();

  const {
    isOpen: isOpenTutorial,
    onOpen: openTutorialModal,
    onClose: closeTutorialModal,
  } = useDisclosure();

  useEffect(() => {
    if (hasWon) {
      openVictoryModal();
    }
  }, [hasWon]);

  return (
    <>
      <Flex
        mx="auto"
        align="center"
        h="100vh"
        flexDir="column"
        w="100%"
        px="2rem"
        maxWidth="520px"
      >
        <Text
          mt={3}
          fontSize={30}
          textAlign="center"
          fontWeight="bold"
          color="white"
        >
          Who is?
        </Text>
        <Flex align="center" justify="center">
          <Image src="assets/csgo.png" alt="CS:GO logo" w="20%" h="auto" />
          <Text
            ml="1rem"
            fontSize={20}
            textAlign="center"
            fontWeight="bold"
            color="white"
          >
            Major Players
          </Text>
        </Flex>

        <Image
          src="assets/info.svg"
          alt="How to play"
          boxSize="30px"
          position="fixed"
          cursor="pointer"
          top="5"
          right="5"
          onClick={openTutorialModal}
          transition="all 0.3s"
          _hover={{
            transform: "scale(1.1)",
          }}
        />

        {/* <Image alt="player photo" src={correctPlayer.photoURL} /> */}

        {hasWon || hasLost ? (
          <Text
            my={10}
            color={hasWon ? "green.500" : "red.500"}
            fontWeight="bold"
            fontSize={24}
            onClick={hasWon ? openVictoryModal : openDefeatModal}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {hasWon ? "You won!" : "You lost!"}
          </Text>
        ) : (
          <GuessInput />
        )}

        <GuessesBox />

        <Link
          my={8}
          fontWeight="bold"
          color="purple.200"
          textAlign="center"
          href="https://ko-fi.com/rodrigoeduardo"
          target="_blank"
        >
          Buy me a coffee! 💜☕
        </Link>
      </Flex>

      <VictoryModal isOpen={isOpenVictory} onClose={closeVictoryModal} />
      <DefeatModal isOpen={isOpenDefeat} onClose={closeDefeatModal} />
      <TutorialModal isOpen={isOpenTutorial} onClose={closeTutorialModal} />
    </>
  );
};

export default Home;
