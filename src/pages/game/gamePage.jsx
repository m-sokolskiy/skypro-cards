import { useSelector } from 'react-redux';
import { Game } from '../../components/Game/Game';
import * as S from './style/gamePage.S';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GamePage = () => {
  const navigate = useNavigate();

  const isStatus = useSelector((state) => state.game.status);

  useEffect(() => {
    if (isStatus !== 'game') {
      navigate('/');
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <Game />
      </S.Container>
    </S.Wrapper>
  );
};
