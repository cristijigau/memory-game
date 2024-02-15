import CardTable from '../CardTable';
import { MainGameContainer } from './styled';
import Settings from '../Settings';
import GameAppBar from '../GameAppBar';
import GameResults from '../GameResults';

const GameLayout = () => {
  return (
    <MainGameContainer>
      <GameResults />
      <GameAppBar />
      <Settings />
      <CardTable />
    </MainGameContainer>
  );
};

export default GameLayout;
