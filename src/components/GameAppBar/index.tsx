import { useContext } from 'react';
import Settings from '../Settings';
import { GameStateContext } from '../../contexts/GameStateContext';

const GameAppBar = () => {
  const { currentPlayer, players } = useContext(GameStateContext);

  const currentPlayerName = players[currentPlayer - 1]?.name;

  return (
    <div style={{ width: '100%' }}>
      <Settings />
      Current Player: {currentPlayerName} <br />
    </div>
  );
};

export default GameAppBar;
