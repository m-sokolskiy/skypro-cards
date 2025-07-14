import { useSelector } from "react-redux";

const Game = () => {

    const isLevel = useSelector(state => state.game.level)

    return (
        <div>
            {isLevel}
        </div>
    );
};

export { Game }