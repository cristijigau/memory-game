import { CardItem, CardStatus, ImageData } from './types';

export const shuffle = (array: CardItem[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const prepareCardData = (items: ImageData[]) => {
  const duplicatedItems = items.map((originalItem) => ({
    ...originalItem,
    id: originalItem.id + '-duplicate',
  }));

  const allItems = [...items, ...duplicatedItems].map((item) => ({
    ...item,
    status: CardStatus.Initial,
  }));

  return shuffle(allItems);
};

export const stringToColor = (string: string) => {
  let hash = 0;
  let color = '#';

  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

export const getFlippedAndMismatchedCards = (cards: CardItem[]) =>
  cards.reduce<{
    flippedCards: CardItem[];
    mismatchedCards: CardItem[];
  }>(
    (result, currentCard) => {
      if (currentCard.status === CardStatus.Flipped) {
        return {
          ...result,
          flippedCards: [...result.flippedCards, currentCard],
        };
      }
      if (currentCard.status === CardStatus.Mismatched) {
        return {
          ...result,
          mismatchedCards: [...result.mismatchedCards, currentCard],
        };
      }
      return result;
    },
    { flippedCards: [], mismatchedCards: [] },
  );
