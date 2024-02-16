import { GameStateProvider } from './contexts/GameStateContext';
import GameLayout from './components/GameLayout';
import CustomThemeProvider from './theme/CustomThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <GameStateProvider>
        <GameLayout />
      </GameStateProvider>
    </CustomThemeProvider>
  );
}

export default App;
