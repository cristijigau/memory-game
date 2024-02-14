import { useContext, useState } from 'react';
import { GameStateContext } from '../../contexts/GameStateContext';

const Settings = () => {
  const [numPlayers, setNumPlayers] = useState(1);
  const [playerNames, setPlayerNames] = useState(['']);
  const { updatePlayers } = useContext(GameStateContext);

  const handlePlayersNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const playersNumber = Number(e.target.value);
    setNumPlayers(playersNumber);
    setPlayerNames(new Array(playersNumber).fill(''));
  };

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const names = [...playerNames];
    names[index] = e.target.value;
    setPlayerNames(names);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (playerNames.every((playerName) => playerName.trim() !== '')) {
      const players = playerNames.map((playerName) => ({
        name: playerName,
        score: 0,
      }));
      updatePlayers(players);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <label htmlFor="numPlayers">Number of Players:</label>
      <input
        type="number"
        id="numPlayers"
        value={numPlayers}
        onChange={handlePlayersNumChange}
      />
      {playerNames.map((name, index) => (
        <div key={index}>
          <label htmlFor={`playerName${index}`}>Player {index + 1}:</label>
          <input
            type="text"
            id={`playerName${index}`}
            value={name}
            onChange={(e) => handleNameChange(e, index)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Settings;
