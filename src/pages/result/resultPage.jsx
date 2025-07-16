import { useNavigate } from 'react-router-dom';
import * as S from './style/resultPage.S'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ResultPage = () => {

    const navigate = useNavigate()

    const isStatus = useSelector(state => state.game.status)

    useEffect(() => {
        if (isStatus !== 'result') {
            navigate('/');
        }
    }, []);

    return (
        <S.Wrapper>
            <S.Container>
                <> Привет </>
            </S.Container>
        </S.Wrapper>
    );
};