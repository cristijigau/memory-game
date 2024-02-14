import CardTable from './components/CardTable';
import GameAppBar from './components/GameAppBar';
import { GameStateProvider } from './contexts/GameStateContext';
import Container from '@mui/material/Container';

function App() {
  return (
    <GameStateProvider>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GameAppBar />
        <CardTable />
      </Container>
    </GameStateProvider>
  );
}

export default App;
