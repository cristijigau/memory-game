import './App.css';
import CardTable from './components/CardTable';
import GameAppBar from './components/GameAppBar';
import { GameStateProvider } from './contexts/GameStateContext';

function App() {
  return (
    <main className="main-container">
      <GameStateProvider>
        <GameAppBar />
        <CardTable />
      </GameStateProvider>
    </main>
  );
}

export default App;
