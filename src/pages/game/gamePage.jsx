import { Game } from '../../components/Game/Game';
import * as S from './style/gamePage.S'

export const GamePage = () => {


    return (
        <S.Wrapper>
            <S.Container>
                <Game />
            </S.Container>
        </S.Wrapper>
    );
};
