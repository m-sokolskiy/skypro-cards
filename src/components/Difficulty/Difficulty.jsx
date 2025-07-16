import { useNavigate } from 'react-router-dom';
import * as S from './style/Difficulty.S'
import { LEVELS } from '../../lib/LEVELS';
import { useDispatch, useSelector } from 'react-redux';
import { DifficultyOption } from '../DifficultyOption/DifficultyOption';
import { setStatus } from '../../store/slices/slices';

const Difficulty = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isLevel = useSelector(state => state.game.level)

    const handleStart = () => {
        if (isLevel) {
            dispatch(setStatus('game'))
            navigate('/game');
        } else {
            alert('Выбери сложность!');
        }
    };

    return (
        <S.Container>
            <S.Title>Выбери сложность</S.Title>
            <S.InputContainer>
                {LEVELS.map((level) => {
                    return (
                        <DifficultyOption key={level.id} id={level.id} value={level.value} label={level.label} />
                    )
                })}
            </S.InputContainer>
            <S.Button onClick={handleStart}>Cтарт</S.Button>
        </S.Container >
    );
};

export { Difficulty }