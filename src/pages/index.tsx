import {
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { GuessesBox } from '../components/GuessesBox';
import { GuessInput } from '../components/GuessInput';
import { GameContext } from '../contexts/GameContext';

const Home: NextPage = () => {
  const { hasWon, correctPlayer, guesses } = useContext(GameContext);

  const { isOpen, onOpen: openModal, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    if (hasWon) {
      openModal();
    }
  }, [hasWon]);

  const handleShare = () => {
    const shareText = `I've just guessed the major player's name after ${
      guesses.length
    } ${
      guesses.length > 1 ? 'tries' : 'try'
    }!\n\nhttps://whoismajor.vercel.app/`;

    navigator.clipboard.writeText(shareText);

    toast({
      title: 'Copied to clipboard.',
      status: 'success',
      duration: 3000,
      isClosable: false,
      position: 'top',
    });
  };

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

        {/* <Image alt="player photo" src={correctPlayer.photoURL} /> */}

        {hasWon ? (
          <Text
            my={10}
            color="green.400"
            fontWeight="bold"
            fontSize={24}
            onClick={openModal}
            _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            You won!
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

      {/* winner winner chicken dinner (modal) */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={20}>
          <ModalHeader textAlign="center">You won!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign="center">
              The player is: <strong>{correctPlayer.name}</strong>
            </Text>
            <Text textAlign="center">
              You guessed right after{' '}
              <strong>
                {guesses.length} {guesses.length > 1 ? 'tries' : 'try'}!
              </strong>
            </Text>
          </ModalBody>

          <Button
            alignSelf="center"
            width="50%"
            padding={6}
            my={3}
            colorScheme="blue"
            onClick={handleShare}
          >
            Share
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
