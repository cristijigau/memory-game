import { List } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ModalContentBox = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
}));

export const ResultsContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  minWidth: '40vw',
  minHeight: '50vh',
  backgroundColor: 'rgba(255, 255, 255, 0.48)',
  borderRadius: '12px',
  backdropFilter: 'blur(2px)',
  border: ' 1px solid rgba(255, 255, 255, 0.11)',
}));

export const ResultsList = styled(List)(() => ({
  width: '100%',
  maxWidth: 360,
}));
