import { useContext } from 'react';
import Settings from '../Settings';
import { GameStateContext } from '../../contexts/GameStateContext';
import { CardStatus } from '../../common/types';

const GameAppBar = () => {
  const {
    cards,
    currentPlayer,
    players,
    updateAllStatuses,
    updateIsGameStarted,
  } = useContext(GameStateContext);

  const handleStartGame = () => {
    if (!players.length) {
      return;
    }

    updateAllStatuses(cards, CardStatus.Flipped);

    setTimeout(() => {
      updateAllStatuses(cards, CardStatus.Initial);
      updateIsGameStarted(true);
    }, 3000);
  };

  const currentPlayerName = players[currentPlayer - 1]?.name;

  return (
    <div style={{ width: '100%' }}>
      <Settings />
      Current Player: {currentPlayerName} <br />
      <button type="button" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default GameAppBar;
