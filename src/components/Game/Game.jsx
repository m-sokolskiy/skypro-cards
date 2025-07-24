import { useDispatch, useSelector } from 'react-redux';
import * as S from './style/Game.S';
import { useNavigate } from 'react-router-dom';
import { setStatus } from '../../store/slices/slices';

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLevel = useSelector((state) => state.game.level);

  const handleResult = () => {
    dispatch(setStatus('result'));
    navigate('/result');
  };

  return (
    <>
      <S.Button onClick={handleResult}>{isLevel}</S.Button>
    </>
  );
};

export { Game };
