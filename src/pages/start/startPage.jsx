import { useDispatch } from 'react-redux';
import { Difficulty } from '../../components/Difficulty/Difficulty';
import * as S from './style/startPage.S'
import { useEffect } from 'react';
import { setLevel, setStatus } from '../../store/slices/slices';

export const StartPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLevel(null))
        dispatch(setStatus('start'))
    }, [])

    return (
        <S.Wrapper>
            <S.Container>
                <Difficulty />
            </S.Container>
        </S.Wrapper>
    )

};
