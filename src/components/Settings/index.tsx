import { ChangeEvent, useContext, useState } from 'react';
import { GameStateContext } from '../../contexts/GameStateContext';
import { Button, Modal, Paper, TextField, Typography } from '@mui/material';
import { ActionSection, FormContainer, ModalContentBox } from './styled';
import { CardStatus, Player } from '../../common/types';

const Settings = () => {
  const { cards, updateAllStatuses, updateIsGameStarted } =
    useContext(GameStateContext);

  const [numberOfPlayers, setNumPlayers] = useState<number>(1);
  const [playerNames, setPlayerNames] = useState<string[]>(['']);
  const { updatePlayers } = useContext(GameStateContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);

  const nameInputLabels = [
    'First player name',
    'Second player name',
    'Third player name',
  ];

  const handlePlayersNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const playersNumber = Number(e.target.value);

    if (playersNumber < 1 || playersNumber > 3) {
      return;
    }

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

    updateAllStatuses(cards, CardStatus.Flipped);

    setTimeout(() => {
      updateAllStatuses(cards, CardStatus.Initial);
      updateIsGameStarted(true);
    }, 3000);
  };

  const handleSubmit = () => {
    if (playerNames.every((playerName) => playerName.trim() !== '')) {
      const players = playerNames.map((playerName) => ({
        name: playerName,
        score: 0,
      }));

      updatePlayers(players);
      setIsSettingsOpen(false);
      handleStartGame(players);
    }
  };

  return (
    <Modal
      open={isSettingsOpen}
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentBox>
        <Paper>
          <FormContainer>
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              color="primary"
            >
              Game Settings
            </Typography>
            <TextField
              id="payer-number-input"
              label="Number of players"
              type="number"
              variant="outlined"
              value={numberOfPlayers}
              onChange={handlePlayersNumChange}
              inputProps={{ input: { min: 0, max: 3 } }}
            />
            {playerNames.map((name, index) => (
              <TextField
                key={index}
                id="name-input"
                label={nameInputLabels[index]}
                variant="outlined"
                value={name}
                onChange={(e) => handleNameChange(e, index)}
              />
            ))}
            <ActionSection>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Start Game
              </Button>
            </ActionSection>
          </FormContainer>
        </Paper>
      </ModalContentBox>
    </Modal>
  );
};

export default Settings;
