import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ModalContentBox = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

export const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  height: '60vh',
  width: '20vw',
}));

export const ActionSection = styled(Box)<BoxProps>(() => ({
  marginTop: 'auto',
}));
