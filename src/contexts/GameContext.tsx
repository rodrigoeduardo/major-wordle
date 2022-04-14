import React, { createContext, useEffect, useState } from 'react';
import { Player } from '../types/Player';

interface GameContextData {
  correctPlayer: Player;
  guesses: Player[];
  setGuesses: (newGuesses: Player[]) => void;
  hasWon: boolean;
}

export const GameContext = createContext({} as GameContextData);

export function GameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guesses, setGuesses] = useState<Player[]>([]);
  const [hasWon, setHasWon] = useState(false);

  // temporary static correct player
  const correctPlayer = {
    id: 312,
    name: 'FalleN',
    link: 'https://liquipedia.net/counterstrike/FalleN',
    nationality: 'Brazil',
    photoURL:
      'https://liquipedia.net/commons/images/thumb/7/7b/FalleN_%40_PGL_Major_Stockholm_2021.jpg/600px-FalleN_%40_PGL_Major_Stockholm_2021.jpg',
    role: 'In-game leader',
    totalWinnings: '$1,125,229',
  };

  // check if last guess is correct
  useEffect(() => {
    if (guesses.length > 0) {
      const lastGuess = guesses[0];
      if (lastGuess.name === correctPlayer.name) {
        setHasWon(true);
      }
    }
  }, [guesses]);

  return (
    <GameContext.Provider
      value={{ correctPlayer, guesses, setGuesses, hasWon }}
    >
      {children}
    </GameContext.Provider>
  );
}
