import React, { createContext, useEffect, useState } from "react";
import { Player } from "../types/Player";
import { fetchCorrectPlayer } from "../config/firebase";

interface GameContextData {
  correctPlayer: Player;
  guesses: Player[];
  setGuesses: (newGuesses: Player[]) => void;
  hasWon: boolean;
  hasLost: boolean;
}

export const GameContext = createContext({} as GameContextData);

export function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [correctPlayer, setCorrectPlayer] = useState<Player>({
    id: 312,
    name: "FalleN",
    link: "https://liquipedia.net/counterstrike/FalleN",
    nationality: "Brazil",
    photoURL:
      "https://liquipedia.net/commons/images/thumb/7/7b/FalleN_%40_PGL_Major_Stockholm_2021.jpg/600px-FalleN_%40_PGL_Major_Stockholm_2021.jpg",
    role: "In-game leader",
    totalWinnings: "$1,125,229",
  });

  async function getCorrectPlayer() {
    const fetchedCorrectPlayer = await fetchCorrectPlayer();
    setCorrectPlayer(fetchedCorrectPlayer);
  }

  useEffect(() => {
    getCorrectPlayer();
  }, []);

  // check if last guess is correct
  useEffect(() => {
    if (guesses.length > 0) {
      const lastGuess = guesses[0];
      if (lastGuess.name === correctPlayer.name) {
        setHasWon(true);
      }
    }

    if (guesses.length === 8 && !hasWon) {
      setHasLost(true);
    }
  }, [guesses]);

  return (
    <GameContext.Provider
      value={{ correctPlayer, guesses, setGuesses, hasWon, hasLost }}
    >
      {children}
    </GameContext.Provider>
  );
}
