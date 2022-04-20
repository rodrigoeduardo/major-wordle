import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

interface DefeatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DefeatModal({ isOpen, onClose }: DefeatModalProps) {
  const { correctPlayer, guesses } = useContext(GameContext);
  const toast = useToast();

  const handleShare = () => {
    const shareText = `I've just tried to guess the major player's name!\n\nhttps://whoismajor.vercel.app/`;

    navigator.clipboard.writeText(shareText);

    toast({
      title: "Copied to clipboard.",
      status: "success",
      duration: 3000,
      isClosable: false,
      position: "top",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt={20}>
        <ModalHeader textAlign="center">You lost!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text textAlign="center">
            The player was: <strong>{correctPlayer.name}</strong>
          </Text>
          <Text textAlign="center">You tried 8 times and failed.</Text>
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
  );
}
