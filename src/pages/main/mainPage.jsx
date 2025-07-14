import { useDispatch } from 'react-redux';
import { Difficulty } from '../../components/Difficulty/Difficulty';
import * as S from './style/mainPage.S'
import { useEffect } from 'react';
import { setLevel } from '../../store/slices/slices';

export const MainPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLevel(null))
    },[])

    return (

        <S.Wrapper>
            <S.Container>
                <Difficulty />
            </S.Container>
        </S.Wrapper>
    )

};
