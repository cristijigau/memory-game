import { StyledBox } from './styled';
import CurrentPlayer from '../CurrentPlayer';

const GameAppBar = () => {
  return (
    <StyledBox>
      <CurrentPlayer />
    </StyledBox>
  );
};

export default GameAppBar;
