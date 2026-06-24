import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from '../../store/slices/slices';
import * as S from './style/Timer.S';

const Timer = () => {
  const dispatch = useDispatch();

  const isCurrentTime = useSelector((state) => state.game.currentTime);
  const intervalRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        dispatch(setCurrentTime());
      }, 1000);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');
  const minutes = formatTime(Math.floor(isCurrentTime / 60));
  const seconds = formatTime(isCurrentTime % 60);

  return (
    <S.TimerWrapper>
      <S.LabelRow>
        <S.Label>min</S.Label>
        <S.Label>sek</S.Label>
      </S.LabelRow>
      <S.TimeRow>
        <S.Time>{minutes}</S.Time>
        <S.Dot>.</S.Dot>
        <S.Time>{seconds}</S.Time>
      </S.TimeRow>
    </S.TimerWrapper>
  );
};

export { Timer };
