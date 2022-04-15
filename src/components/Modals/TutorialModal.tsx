import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TutorialModal({ isOpen, onClose }: TutorialModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent my={20} maxW="360px" bgColor="gray.800">
        <ModalHeader textAlign="center" color="white">
          How to play
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Text textAlign="left" fontSize="0.9rem" color="white">
            Guess the CS:GO player in 8 tries or less.
            <br />
            <br />
            The mystery player is a player who have competed at least in one of{' '}
            <strong>Valve Majors</strong>, since the first one, DreamHack Winter
            2013.
            <br />
            <br />
            Feedback will be revealed comparing your guessed player. For
            example, if you guess <strong>dupreeh</strong>, this will be shown
            to you:
            <br />
            <br />
          </Text>
          <Flex direction="column" color="gray.50" textAlign="center">
            <Text fontWeight="bold">🏴 Nationality:</Text>
            <Text color="gray.300">Denmark ✅</Text>
            <Text fontWeight="bold">🏹 Primary role:</Text>
            <Text color="gray.300">Rifler ❌</Text>
            <Text fontWeight="bold">💰 Total winnings:</Text>
            <Text color="gray.300">$1,970,873 🔻</Text>
          </Flex>
          <Text textAlign="left" fontSize="0.9rem" color="white">
            <br />
            That means that the mystery player <strong>is from Denmark</strong>,
            but <strong>is not a Rifler as primary role</strong>. And he has won{' '}
            <strong>less than $1,970,873</strong> in total.
            <br />
          </Text>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Text textAlign="center" fontSize="0.8rem" color="white">
            Made with ❤️ by{' '}
            <a
              href="https://github.com/rodrigoeduardo"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
            >
              Rodrigo Eduardo
            </a>
          </Text>
          <Text textAlign="center" fontSize="0.7rem" color="white">
            <i>Who is? Major player</i> was totally inspired by{' '}
            <a
              href="https://missing11.com/who-are-ya/"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
            >
              Who Are Ya
            </a>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
