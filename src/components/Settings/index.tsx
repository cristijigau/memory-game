import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, InputAdornment, Modal, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { GameStateContext } from '../../contexts/GameStateContext';
import {
  ActionSection,
  FormContainer,
  ModalContentBox,
  NameInput,
  PlayerNumberButtons,
} from './styled';
import { CardStatus, Player } from '../../common/types';
import { NAME_INPUT_LABELS, PLAYER_NUMBER_BUTTONS } from './constants';
import { DISPLAY_ALL_CARDS_TIMEOUT } from '../../common/constants';
import { stringToColor } from '../../common/helpers';

const Settings = () => {
  const { cards, isGameStarted, updateAllStatuses, updateIsGameStarted } =
    useContext(GameStateContext);

  const [numberOfPlayers, setNumPlayers] = useState<number>(1);
  const [playerNames, setPlayerNames] = useState<string[]>(['']);
  const { updatePlayers } = useContext(GameStateContext);

  const handlePlayersNumChange = (playersNumber: number) => {
    setNumPlayers(playersNumber);
    setPlayerNames(new Array(playersNumber).fill(''));
  };

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) => {
    const names = [...playerNames];
    names[index] = e.target.value;
    setPlayerNames(names);
  };

  const handleStartGame = (players: Player[]) => {
    if (!players.length) {
      return;
    }

    updateIsGameStarted(true);
    updateAllStatuses(cards, CardStatus.Flipped);

    setTimeout(() => {
      updateAllStatuses(cards, CardStatus.Initial);
    }, DISPLAY_ALL_CARDS_TIMEOUT);
  };

  const handleSubmit = () => {
    if (playerNames.every((playerName) => playerName.trim() !== '')) {
      const players = playerNames.map((playerName) => ({
        name: playerName,
        score: 0,
        color: stringToColor(playerName),
      }));

      updatePlayers(players);
      handleStartGame(players);
    }
  };

  return (
    <Modal
      open={!isGameStarted}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentBox>
        <FormContainer>
          <Box>
            <Typography align="center" variant="h4" color="primary">
              😺
            </Typography>
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              color="primary"
            >
              MemoMeow
            </Typography>
          </Box>

          <Box>
            <PlayerNumberButtons
              size="small"
              aria-label="Player number buttons"
              variant="contained"
            >
              {PLAYER_NUMBER_BUTTONS.map((buttonName, index) => (
                <Button
                  color={
                    numberOfPlayers - 1 === index ? 'secondary' : 'primary'
                  }
                  key={buttonName}
                  onClick={() => handlePlayersNumChange(index + 1)}
                >
                  {buttonName}
                </Button>
              ))}
            </PlayerNumberButtons>
          </Box>
          {playerNames.map((name, index) => (
            <NameInput
              key={index}
              id="name-input"
              autoComplete="off"
              size="small"
              label={
                numberOfPlayers - 1 ? NAME_INPUT_LABELS[index] : 'Player Name'
              }
              variant="outlined"
              value={name}
              onChange={(e) => handleNameChange(e, index)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          ))}
          <ActionSection>
            <Button variant="contained" onClick={handleSubmit} fullWidth>
              Start Game
            </Button>
          </ActionSection>
        </FormContainer>
      </ModalContentBox>
    </Modal>
  );
};

export default Settings;
