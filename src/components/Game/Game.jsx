import * as S from './style/Game.S';
import { CARDS } from '../../lib/CARDS';
import { Timer } from '../Timer/Timer';
import { GameCards } from './GameCards';

const Game = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <Timer />
        <S.Button>Начать заново</S.Button>
      </S.HeaderContainer>
      <S.CardsContainer>
        {CARDS?.map((item) => (
          <GameCards key={item.id} item={item} />
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};

export { Game };
