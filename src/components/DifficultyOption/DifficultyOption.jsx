import { useDispatch } from 'react-redux';
import { setLevel } from '../../store/slices/slices';
import * as S from './style/DifficultyOption.S';

const DifficultyOption = ({ id, value, label }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setLevel(value));
  };
  return (
    <>
      <S.Input id={id} value={value} name="radios" type="radio" onChange={handleChange}></S.Input>
      <S.Label htmlFor={id}>{label}</S.Label>
    </>
  );
};

export { DifficultyOption };
