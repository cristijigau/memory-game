import { CardItem, CardStatus } from '../../common/types';

export type Player = {
  name: string;
  score: number;
};

export type GameState = {
  cards: CardItem[];
  currentPlayer: number;
  players: Player[];
  isGameStarted: boolean;
  updateCards: (payload: CardItem[]) => void;
  updateCurrentPlayer: (payload: number) => void;
  updatePlayers: (payload: Player[]) => void;
  updateIsGameStarted: (payload: boolean) => void;
  updateAllStatuses: (cards: CardItem[], status: CardStatus) => void;
};