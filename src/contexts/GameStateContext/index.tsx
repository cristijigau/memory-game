import { createContext, useCallback, useState } from 'react';

import { GameState } from './types';
import { CardItem, CardStatus, Player } from '../../common/types';

const defaultGameState = {
  cards: [],
  currentPlayer: 1,
  players: [],
  isGameStarted: false,
  refetchImagesTrigger: false,
  updateCards: () => {},
  updateCurrentPlayer: () => {},
  updatePlayers: () => {},
  updateIsGameStarted: () => {},
  updateAllStatuses: () => {},
  resetGameState: () => {},
  triggerRefetchImages: () => {},
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
  const [refetchImagesTrigger, setRefetchImagesTrigger] =
    useState<boolean>(false);

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

  const triggerRefetchImages = useCallback(() => {
    setRefetchImagesTrigger((refetch) => !refetch);
  }, []);

  const resetGameState = useCallback(() => {
    setCards(defaultGameState.cards);
    setCurrentPlayer(defaultGameState.currentPlayer);
    setPlayers(defaultGameState.players);
    setIsGameStarted(defaultGameState.isGameStarted);
    triggerRefetchImages();
  }, [triggerRefetchImages]);

  const contextValue = {
    cards,
    currentPlayer,
    players,
    isGameStarted,
    refetchImagesTrigger,
    updateCards,
    updateCurrentPlayer,
    updatePlayers,
    updateIsGameStarted,
    updateAllStatuses,
    resetGameState,
    triggerRefetchImages,
  };

  return (
    <GameStateContext.Provider value={contextValue}>
      {children}
    </GameStateContext.Provider>
  );
};
