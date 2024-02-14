import {
  FlipCardBackSide,
  FlipCardContainer,
  FlipCardFrontSide,
  FlipCardInner,
} from './styled';

type FlipCardProps = {
  cardId: string;
  frontItem: React.ReactNode;
  backItem: React.ReactNode;
  isFlipped: boolean;
  handleClickCard: (id: string) => void;
};

const FlipCard = ({
  cardId,
  frontItem,
  backItem,
  isFlipped,
  handleClickCard,
}: FlipCardProps) => (
  <FlipCardContainer onClick={() => handleClickCard(cardId)}>
    <FlipCardInner isFlipped={isFlipped}>
      <FlipCardFrontSide>{frontItem}</FlipCardFrontSide>
      <FlipCardBackSide>{backItem}</FlipCardBackSide>
    </FlipCardInner>
  </FlipCardContainer>
);

export default FlipCard;
