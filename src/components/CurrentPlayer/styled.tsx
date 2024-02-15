import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Stack } from '@mui/material';

export const CurrentPlayerContainer = styled(Stack)(() => ({
  margin: 'auto',
}));

export const ActiveBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    color: '#FDB813',

    '.MuiSvgIcon-root': {
      animation: 'rotate 5s infinite',
    },
  },

  '@keyframes rotate': {
    '50%': {
      transform: 'rotate(180deg)',
    },
  },
}));

export const InactiveBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    color: '#D3D3D3',
  },
}));
