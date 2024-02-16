import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from '@mui/material';
import { useContext } from 'react';

import { ResultsContainer, ModalContentBox, ResultsList } from './styled';
import { GameStateContext } from '../../contexts/GameStateContext';
import { CardStatus } from '../../common/types';

export const GameResults = () => {
  const { players, cards, resetGameState } = useContext(GameStateContext);

  const isGameFinished =
    !!cards.length && cards.every((card) => card.status === CardStatus.Matched);

  return (
    <Modal
      open={isGameFinished}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentBox>
        <ResultsContainer>
          <ResultsList>
            {players.map(
              (
                { name: playerName, score: playerScore, color: playerColor },
                index,
              ) => (
                <>
                  <ListItem key={`${playerName}-${index}`}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: playerColor }}>
                        {playerName.slice(0, 2)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={playerName}
                      secondary={`Score: ${playerScore}`}
                    />
                  </ListItem>
                  {index !== players.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </>
              ),
            )}
          </ResultsList>
          <Button
            variant="contained"
            onClick={resetGameState}
            sx={{ marginTop: 'auto' }}
          >
            Play again
          </Button>
        </ResultsContainer>
      </ModalContentBox>
    </Modal>
  );
};

export default GameResults;
