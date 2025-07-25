// import * as S from './style/Game.S';
// import { CARDS } from '../../lib/CARDS';
import { Timer } from '../Timer/Timer';
// import { GameCards } from './GameCards';

const Game = () => {
  return (
    <>
      <Timer />
      {/* {CARDS?.map((item) => (
        <GameCards key={item.id} item={item} />
      ))} */}
    </>
  );
};

export { Game };
