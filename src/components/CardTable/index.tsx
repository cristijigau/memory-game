import { useContext, useEffect } from 'react';
import { CardItem, CardStatus } from '../../common/types';
import { GameStateContext } from '../../contexts/GameStateContext';
import useFetchCatImages from '../../hooks/useFetchCatImages';
import { prepareCardData } from '../../common/helpers';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardTableContainer } from './styled';
import FlipCard from '../FlipCard';

const CardTable = () => {
  const {
    cards,
    currentPlayer,
    players,
    isGameStarted,
    updateCards,
    updatePlayers,
    updateCurrentPlayer,
    updateIsGameStarted,
  } = useContext(GameStateContext);

  const {
    images: imagesData,
    loading: isFetchingImages,
    error: errorFetchingImages,
  } = useFetchCatImages();

  useEffect(() => {
    const cardData = prepareCardData(imagesData);

    updateCards(cardData);
  }, [imagesData, updateCards]);

  const updateCardStatusByIds = (
    cards: CardItem[],
    ids: string[],
    status: CardStatus,
  ) => {
    return cards.map((card) =>
      ids.includes(card.id) ? { ...card, status } : card,
    );
  };

  const startNextRound = () => {
    const nextPlayer = currentPlayer < players.length ? currentPlayer + 1 : 1;

    updateCurrentPlayer(nextPlayer);
  };

  const checkResult = (allCards: CardItem[], flippedCards: CardItem[]) => {
    const newStatus =
      flippedCards[0].url === flippedCards[1].url
        ? CardStatus.Matched
        : CardStatus.Mismatched;
    const newCardsState = updateCardStatusByIds(
      allCards,
      [flippedCards[0].id, flippedCards[1].id],
      newStatus,
    );
    const matchedCards = newCardsState.filter(
      (card) => card.status === CardStatus.Matched,
    );

    updateCards(newCardsState);

    if (matchedCards.length === allCards.length) {
      updateIsGameStarted(false);
      alert('FINISHED GAME');
    }

    if (newStatus === CardStatus.Matched) {
      const newScore = players[currentPlayer - 1].score + 1;
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayer - 1].score = newScore;

      updatePlayers(updatedPlayers);
    }

    if (newStatus === CardStatus.Mismatched) {
      setTimeout(() => {
        const initialCardsState = updateCardStatusByIds(
          allCards,
          [flippedCards[0].id, flippedCards[1].id],
          CardStatus.Initial,
        );
        updateCards(initialCardsState);
        startNextRound();
      }, 2000);
    }
  };

  const handleClickCard = (id: string) => {
    const newCardsState = updateCardStatusByIds(
      cards,
      [id],
      CardStatus.Flipped,
    );

    // may use a reduce here
    const flippedCards = newCardsState.filter(
      (card) => card.status === CardStatus.Flipped,
    );
    const mismatchedCards = newCardsState.filter(
      (card) => card.status === CardStatus.Mismatched,
    );

    const isNextRound =
      flippedCards.length <= 2 && mismatchedCards.length === 0;

    if (!isGameStarted || !isNextRound) {
      return;
    }

    if (flippedCards.length == 2) {
      checkResult(newCardsState, flippedCards);
      return;
    }

    updateCards(newCardsState);
  };

  return (
    <CardTableContainer>
      {isFetchingImages && <p>Loading...</p>}
      {errorFetchingImages && <p>Oops, an error ocurred. Try refreshing.</p>}
      {!isFetchingImages &&
        !errorFetchingImages &&
        cards.map((card) => (
          <FlipCard
            key={card.id}
            cardId={card.id}
            isFlipped={card.status !== CardStatus.Initial}
            frontItem={<Card sx={{ height: '100%' }} />}
            backItem={
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  alt="cat"
                  image={card.url}
                  height="100%"
                />
              </Card>
            }
            handleClickCard={handleClickCard}
          />
        ))}
    </CardTableContainer>
  );
};

export default CardTable;
