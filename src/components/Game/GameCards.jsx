import * as S from './style/GameCards.S';

const GameCards = ({ item }) => {
  return (
    <S.CardItem>
      <S.CardImg src={item.back} />
    </S.CardItem>
  );
};

export { GameCards };
