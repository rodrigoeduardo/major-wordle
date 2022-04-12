import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Player } from "../types/Player";

export function GuessInput() {
  const items: any[] = [
    { id: 1, name: "dev1ce" },
    { id: 2, name: "FalleN" },
    { id: 3, name: "allu" },
    { id: 4, name: "fnx" },
  ];

  const [filteredItems, setFilteredItems] = useState<Player[]>();

  const handleSearch = (userInput: string) => {
    // filter items
    if (userInput.length === 0) {
      setFilteredItems(undefined);
      return;
    }
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Flex direction="column" align="center">
      <Input
        onChange={(e) => handleSearch(e.target.value)}
        mt={4}
        maxW="360px"
        variant="unstyled"
        color="black"
        placeholder="Enter your guess"
        _placeholder={{
          color: "gray.500",
        }}
        fontWeight="medium"
        fontSize="lg"
        bgColor="purple.50"
        height={10}
        px={4}
        transition="all 0.2s"
        _focus={{
          outline: "1px solid white",
        }}
      />
      {!!filteredItems && (
        <Flex
          direction="column"
          bgColor="white"
          maxWidth="320px"
          width="95%"
          borderBottomRadius={10}
        >
          {filteredItems?.map((item, index) => (
            <Box
              key={index}
              _hover={{
                cursor: "pointer",
                filter: "brightness(50%)",
              }}
            >
              <Text px={2}>{item.name}</Text>
            </Box>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
