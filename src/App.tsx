import { GameStateProvider } from './contexts/GameStateContext';
import GameLayout from './components/GameLayout';

function App() {
  return (
    <GameStateProvider>
      <GameLayout />
    </GameStateProvider>
  );
}

export default App;
