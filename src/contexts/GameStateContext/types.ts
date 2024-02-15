import { CardItem, CardStatus, Player } from '../../common/types';

export type GameState = {
  cards: CardItem[];
  currentPlayer: number;
  players: Player[];
  isGameStarted: boolean;
  refetchImagesTrigger: boolean;
  updateCards: (payload: CardItem[]) => void;
  updateCurrentPlayer: (payload: number) => void;
  updatePlayers: (payload: Player[]) => void;
  updateIsGameStarted: (payload: boolean) => void;
  updateAllStatuses: (cards: CardItem[], status: CardStatus) => void;
  resetGameState: () => void;
  triggerRefetchImages: () => void;
};
