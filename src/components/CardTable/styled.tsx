import Card, { CardProps } from '@mui/material/Card';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CardStatus } from '../../common/types';

type CardBackFaceProps = CardProps & {
  status?: CardStatus;
};

export const CardTableContainer = styled(Box)<BoxProps>(() => ({
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CardTableGrid = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 16vh)',
  gridTemplateRows: 'repeat(4, 16vh)',
  gridRowGap: '2vw',
  gridColumnGap: '6vw',
  justifyContent: 'center',
  alignContent: 'center',
  padding: theme.spacing(6),
}));

export const CardFrontFace = styled(Card)<CardProps>(() => ({
  height: '100%',
  backgroundColor: 'white',

  '.MuiCardMedia-img': {
    height: '70%',
    width: '70%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export const CardBackFace = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'status',
})<CardBackFaceProps>(({ status }) => {
  const isMatched = status === CardStatus.Matched;
  const isMismatched = status === CardStatus.Mismatched;

  return {
    height: '100%',

    ...(isMatched && {
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        animation: 'match-animation 1s ease forwards',
        pointerEvents: 'none',
      },
    }),

    ...(isMismatched && {
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        animation: 'mismatch-animation 1s ease forwards',
        pointerEvents: 'none',
      },
    }),

    '@keyframes match-animation': {
      '0%': { backgroundColor: 'transparent' },
      '50%': { backgroundColor: 'rgba(0, 255, 0, 0.5)' },
      '100% ': {
        backgroundColor: 'transparent',
      },
    },

    '@keyframes mismatch-animation': {
      '0%': { backgroundColor: 'transparent' },
      '50%': { backgroundColor: 'rgba(255, 0, 0, 0.5)' },
      '100% ': {
        backgroundColor: 'transparent',
      },
    },
  };
});
