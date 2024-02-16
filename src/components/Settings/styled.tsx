import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const ModalContentBox = styled(Box)<BoxProps>(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
}));

export const FormContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  minHeight: '60vh',
  minWidth: '24vw',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '12px',
  backdropFilter: 'blur(2px)',
  border: ' 1px solid rgba(255, 255, 255, 0.11)',
}));

export const ActionSection = styled(Box)<BoxProps>(() => ({
  marginTop: 'auto',
  width: '100%',
}));

export const PlayerNumberButtons = styled(ButtonGroup)<ButtonGroupProps>(
  () => ({
    '.MuiButton-root': {
      boxShadow: 'none',
    },
  }),
);

export const NameInput = styled(TextField)<TextFieldProps>(() => ({
  width: '100%',
}));
