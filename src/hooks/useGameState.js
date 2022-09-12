import { useState, useEffect } from 'react';

import * as gameService from '../services/gameService';

const useGameState = (gameId) => {
    const [game, setGame] = useState({});


    useEffect(() => {
        gameService.getOne(gameId)
            .then(gameResult => {
                setGame(gameResult);
            })

    }, []);

    return [
        game,
        setGame
    ]
};

export default useGameState;