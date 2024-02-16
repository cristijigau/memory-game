import { Avatar, Box } from '@mui/material';
import { useContext } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

import { GameStateContext } from '../../contexts/GameStateContext';
import { ActiveBadge, CurrentPlayerContainer, InactiveBadge } from './styled';

const CurrentPlayer = () => {
  const { players, currentPlayer } = useContext(GameStateContext);

  return (
    <CurrentPlayerContainer direction="row" spacing={2}>
      {players.map(({ name: playerName, color: playerColor }, index) =>
        currentPlayer === index + 1 ? (
          <Box key={`${playerName}-${index}`}>
            <ActiveBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              badgeContent={<WbSunnyIcon />}
            >
              <Avatar sx={{ bgcolor: playerColor }}>
                {playerName.slice(0, 2)}
              </Avatar>
            </ActiveBadge>
          </Box>
        ) : (
          <Box key={`${playerName}-${index}`}>
            <InactiveBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              badgeContent={<CloudIcon />}
            >
              <Avatar sx={{ bgcolor: playerColor }}>
                {playerName.slice(0, 2)}
              </Avatar>
            </InactiveBadge>
          </Box>
        ),
      )}
    </CurrentPlayerContainer>
  );
};

export default CurrentPlayer;
