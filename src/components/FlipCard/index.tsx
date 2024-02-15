import {
  FlipCardBackSide,
  FlipCardContainer,
  FlipCardFrontSide,
  FlipCardInner,
} from './styled';

type FlipCardProps = {
  frontItem: React.ReactNode;
  backItem: React.ReactNode;
  isFlipped: boolean;
};

const FlipCard = ({ frontItem, backItem, isFlipped }: FlipCardProps) => (
  <FlipCardContainer>
    <FlipCardInner isFlipped={isFlipped}>
      <FlipCardFrontSide>{frontItem}</FlipCardFrontSide>
      <FlipCardBackSide>{backItem}</FlipCardBackSide>
    </FlipCardInner>
  </FlipCardContainer>
);

export default FlipCard;
