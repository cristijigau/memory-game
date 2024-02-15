import { styled } from '@mui/material/styles';

export const StyledBox = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
}));
