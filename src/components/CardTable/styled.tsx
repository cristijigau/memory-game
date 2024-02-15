import Card, { CardProps } from '@mui/material/Card';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

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
  backgroundColor: 'rgb(9, 89, 170, 0.8)',
}));
export const CardBackFace = styled(Card)<CardProps>(() => ({
  height: '100%',
}));
