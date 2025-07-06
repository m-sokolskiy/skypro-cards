import * as S from './style/Difficulty.S'

const Difficulty = () => {

    const levels = [
        { id: 'radio1', value: '1', label: '1' },
        { id: 'radio2', value: '2', label: '2' },
        { id: 'radio3', value: '3', label: '3' },
    ];

    const DifficultyOption = ({ id, value, label }) => {
        return (
            <>
                <S.Input id={id} value={value} name="radios" type="radio" ></S.Input>
                <S.Label htmlFor={id}>{label}</S.Label>
            </>
        )
    }

    return (

        <S.Container>
            <S.Title>Выбери сложность</S.Title>

            {levels.map((level) => {
                return (
                    <DifficultyOption key={level.id} id={level.id} value={level.value} label={level.label} />
                )
            })}

            <S.Button>Cтарт</S.Button>

        </S.Container >
    );
};

export { Difficulty }