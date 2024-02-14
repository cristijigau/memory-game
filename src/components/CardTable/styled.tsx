import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const CardTableContainer = styled(Box)<BoxProps>(() => ({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 10vw)',
  gridTemplateRows: 'repeat(4, 10vw)',
  gridRowGap: '2vw',
  gridColumnGap: '6vw',
  background: 'grey',
  justifyContent: 'center',
  alignContent: 'center',
}));
