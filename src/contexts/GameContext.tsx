import React, { createContext, useState } from 'react';
import { Player } from '../types/Player';

interface GameContextData {
  correctPlayer: Player;
  guesses: Player[];
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
    id: 1,
    name: 'dupreeh',
    link: 'https://liquipedia.net/counterstrike/Dupreeh',
    nationality: 'Denmark',
    photoURL:
      'https://liquipedia.net/commons/images/thumb/4/4d/Dupreeh_%40_PGL_Major_Stockholm_2021.jpg/600px-Dupreeh_%40_PGL_Major_Stockholm_2021.jpg',
    role: 'Rifler',
    totalWinnings: '$1,970,873',
  };

  return (
    <GameContext.Provider value={{ correctPlayer, guesses }}>
      {children}
    </GameContext.Provider>
  );
}
