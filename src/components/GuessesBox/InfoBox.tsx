import { Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

interface InfoBoxProps {
  info: string;
  type: 'nationality' | 'role' | 'winnings';
}

export function InfoBox({ info, type }: InfoBoxProps) {
  const {
    correctPlayer: { nationality, role, totalWinnings },
  } = useContext(GameContext);

  const formattedTotalWinnings = parseFloat(
    totalWinnings.substring(1).replace(/,/g, '')
  );

  const resultEmoji = () => {
    if (type === 'nationality') {
      if (nationality === info) {
        return '✅';
      } else {
        return '❌';
      }
    } else if (type === 'role') {
      if (role === info) {
        return '✅';
      } else {
        return '❌';
      }
    } else if (type === 'winnings') {
      const formattedInfo = parseFloat(info.substring(1).replace(/,/g, ''));

      if (formattedTotalWinnings === formattedInfo) {
        return '✅';
      } else if (formattedTotalWinnings > formattedInfo) {
        return '🔺';
      } else if (formattedTotalWinnings < formattedInfo) {
        return '🔻';
      }
    }
  };

  const typeEmoji = () => {
    switch (type) {
      case 'nationality':
        return '🏴';
      case 'role':
        return '🏹';
      case 'winnings':
        return '💰';
    }
  };
  return (
    <Text color="purple.50">
      {typeEmoji()} {info} {resultEmoji()}
    </Text>
  );
}
