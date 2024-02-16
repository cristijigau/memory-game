import { useContext, useEffect } from 'react';
import { CardItem, CardStatus, ImageData } from '../../common/types';
import { GameStateContext } from '../../contexts/GameStateContext';
import {
  getFlippedAndMismatchedCards,
  prepareCardData,
} from '../../common/helpers';
import CardMedia from '@mui/material/CardMedia';
import {
  CardBackFace,
  CardFrontFace,
  CardTableContainer,
  CardTableGrid,
} from './styled';
import FlipCard from '../FlipCard';
import { CircularProgress } from '@mui/material';
import ErrorCard from '../ErrorCard';
import {
  CAT_IMAGES_URL,
  IMAGE_FETCH_ERROR_MESSAGE,
  RESULT_DISPLAY_TIMEOUT,
} from '../../common/constants';
import useFetchData from '../../hooks/useFetchData';
import planableLogo from '../../assets/planable.png';

const CardTable = () => {
  const {
    cards,
    currentPlayer,
    players,
    isGameStarted,
    refetchImagesTrigger,
    updateCards,
    updatePlayers,
    updateCurrentPlayer,
  } = useContext(GameStateContext);

  const {
    data: imagesData,
    loading: isFetchingImages,
    error: errorFetchingImages,
  } = useFetchData<ImageData[]>(CAT_IMAGES_URL, refetchImagesTrigger);

  useEffect(() => {
    const cardData = prepareCardData(imagesData ?? []);

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

  const checkResult = (
    flippedCardId: string,
    flippedCardURL: string,
    clickedCardId: string,
    clickedCardURL: string,
  ) => {
    const newStatus =
      flippedCardURL === clickedCardURL
        ? CardStatus.Matched
        : CardStatus.Mismatched;
    const newCardsState = updateCardStatusByIds(
      cards,
      [flippedCardId, clickedCardId],
      newStatus,
    );

    updateCards(newCardsState);

    if (newStatus === CardStatus.Matched) {
      const newScore = players[currentPlayer - 1].score + 1;
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayer - 1].score = newScore;

      updatePlayers(updatedPlayers);
    }

    if (newStatus === CardStatus.Mismatched) {
      setTimeout(() => {
        const initialCardsState = updateCardStatusByIds(
          cards,
          [flippedCardId, clickedCardId],
          CardStatus.Initial,
        );
        updateCards(initialCardsState);
        startNextRound();
      }, RESULT_DISPLAY_TIMEOUT);
    }
  };

  const handleClickCard = (clickedCardId: string, clickedCardURL: string) => {
    const { flippedCards, mismatchedCards } =
      getFlippedAndMismatchedCards(cards);
    const shouldFlip = flippedCards.length <= 1 && !mismatchedCards.length;

    if (!isGameStarted || !shouldFlip) {
      return;
    }

    if (flippedCards.length) {
      checkResult(
        flippedCards[0].id,
        flippedCards[0].url,
        clickedCardId,
        clickedCardURL,
      );
      return;
    }

    const newCardsState = updateCardStatusByIds(
      cards,
      [clickedCardId],
      CardStatus.Flipped,
    );

    updateCards(newCardsState);
  };

  return (
    <CardTableContainer>
      {isFetchingImages && <CircularProgress />}
      {errorFetchingImages && <ErrorCard message={IMAGE_FETCH_ERROR_MESSAGE} />}
      {!isFetchingImages && !errorFetchingImages && (
        <CardTableGrid>
          {cards.map((card) => (
            <FlipCard
              key={card.id}
              isFlipped={card.status !== CardStatus.Initial}
              frontItem={
                <CardFrontFace
                  raised={true}
                  onClick={() => handleClickCard(card.id, card.url)}
                >
                  <CardMedia
                    component="img"
                    alt="cat"
                    image={planableLogo}
                    height="100%"
                  />
                </CardFrontFace>
              }
              backItem={
                <CardBackFace raised={true} status={card.status}>
                  <CardMedia
                    component="img"
                    alt="cat"
                    image={card.url}
                    height="100%"
                  />
                </CardBackFace>
              }
            />
          ))}
        </CardTableGrid>
      )}
    </CardTableContainer>
  );
};

export default CardTable;
