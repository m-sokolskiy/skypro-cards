import * as S from './style/GameCards.S';

const GameCards = ({ item }) => {
  return (
    <S.CardItem>
      <S.CardImg src={item.img} />
    </S.CardItem>
  );
};

export { GameCards };
