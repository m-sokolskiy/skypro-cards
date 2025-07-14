const Game = () => {

    const level = localStorage.getItem('level');

    return (
        <div>
            {level}
        </div>
    );
};

export { Game }