import React, { createContext, useState } from "react";
import { Player } from "../types/Player";

interface GameContextData {
  correctPlayer: Player;
  guesses: Player[];
  setGuesses: (newGuesses: Player[]) => void;
}

export const GameContext = createContext({} as GameContextData);

export function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guesses, setGuesses] = useState<Player[]>([]);

  // temporary static correct player
  const correctPlayer = {
    id: 312,
    name: "FalleN",
    link: "https://liquipedia.net/counterstrike/FalleN",
    nationality: "Brazil",
    photoURL:
      "https://liquipedia.net/commons/images/thumb/7/7b/FalleN_%40_PGL_Major_Stockholm_2021.jpg/600px-FalleN_%40_PGL_Major_Stockholm_2021.jpg",
    role: "In-game leader",
    totalWinnings: "$1,125,229",
  };

  return (
    <GameContext.Provider value={{ correctPlayer, guesses, setGuesses }}>
      {children}
    </GameContext.Provider>
  );
}
