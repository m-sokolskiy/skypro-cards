import { useNavigate } from 'react-router-dom';
import * as S from './style/Difficulty.S'
import { useState } from 'react';

const Difficulty = () => {

    const navigate = useNavigate()

    const [isLevel, setIsLevel] = useState(null);

    const levels = [
        { id: 'radio1', value: '1', label: '1' },
        { id: 'radio2', value: '2', label: '2' },
        { id: 'radio3', value: '3', label: '3' },
    ];

    const handleChange = (e) => {
        setIsLevel(e.target.value);
    };

    const handleStart = () => {
        if (isLevel) {
            localStorage.setItem('level', `${isLevel}`);
            navigate('/game');
        } else {
            alert('Выбери сложность!');
        }
    };

    const DifficultyOption = ({ id, value, label }) => {
        return (
            <>
                <S.Input id={id} value={value} name="radios" type="radio" onChange={handleChange}></S.Input>
                <S.Label htmlFor={id}>{label}</S.Label>
            </>
        )
    }

    return (
        <S.Container>
            <S.Title>Выбери сложность</S.Title>
            <S.InputContainer>
                {levels.map((level) => {
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