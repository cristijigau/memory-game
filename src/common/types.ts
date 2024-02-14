export enum CardStatus {
  Initial = 'initial',
  Flipped = 'flipped',
  Matched = 'matched',
  Mismatched = 'mismatched',
}

export type ImageData = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type CardItem = ImageData & {
  status: CardStatus;
};
