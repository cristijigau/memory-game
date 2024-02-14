import { CardItem, CardStatus } from '../../common/types';
import './index.css';

type CardProps = {
  item: CardItem;
  status: CardStatus;
  handleClickCard: (id: string) => void;
};

const Card = ({ item, status, handleClickCard }: CardProps) => {
  return (
    <div onClick={() => handleClickCard(item.id)} className={`card ${status}`}>
      <img
        src={item.url}
        alt="cat"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default Card;
