import { createContext, useCallback, useState } from 'react';
import { GameState, Player } from './types';
import { CardItem, CardStatus } from '../../common/types';

const defaultGameState = {
  cards: [],
  currentPlayer: 1,
  players: [],
  isGameStarted: false,
  updateCards: () => {},
  updateCurrentPlayer: () => {},
  updatePlayers: () => {},
  updateIsGameStarted: () => {},
  updateAllStatuses: () => {},
};

export const GameStateContext = createContext<GameState>(defaultGameState);

export const GameStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [players, setPlayers] = useState<Player[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const updateCards = useCallback((updatedCards: CardItem[]) => {
    setCards(updatedCards);
  }, []);

  const updateCurrentPlayer = useCallback((newCurrentPlayer: number) => {
    setCurrentPlayer(newCurrentPlayer);
  }, []);

  const updatePlayers = useCallback((updatedPlayers: Player[]) => {
    setPlayers(updatedPlayers);
  }, []);

  const updateIsGameStarted = useCallback((isGameStarted: boolean) => {
    setIsGameStarted(isGameStarted);
  }, []);

  const updateAllStatuses = useCallback(
    (cards: CardItem[], status: CardStatus) => {
      const updatedCards = cards.map((card) => ({ ...card, status }));
      updateCards(updatedCards);
    },
    [updateCards],
  );

  const contextValue = {
    cards,
    currentPlayer,
    players,
    isGameStarted,
    updateCards,
    updateCurrentPlayer,
    updatePlayers,
    updateIsGameStarted,
    updateAllStatuses,
  };

  console.log('context value: ', contextValue);

  return (
    <GameStateContext.Provider value={contextValue}>
      {children}
    </GameStateContext.Provider>
  );
};
