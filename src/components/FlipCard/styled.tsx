import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

type FlipCardInnerProps = BoxProps & {
  isFlipped?: boolean;
};

export const FlipCardContainer = styled(Box)<BoxProps>(() => ({
  backgroundColor: 'transparent',
  width: '100%',
  height: '100%',
  perspective: '1000px',
}));

export const FlipCardInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isFlipped',
})<FlipCardInnerProps>(({ isFlipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',

  ...(isFlipped && {
    transform: 'rotateY(180deg)',
  }),
}));

export const FlipCardFrontSide = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
}));

export const FlipCardBackSide = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
}));
