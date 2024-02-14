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
