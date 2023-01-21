import { Join, Playing, Joining } from "../components/game";

import { useState } from "react";

const Game = () => {

    const [gameStatus, setGameStatus] = useState({
        status: 'join',
        connectionInfo: null,
        connectedSocket: null,
    })

    const changeGameStatus = status => {

        setGameStatus({...Object.assign(gameStatus, status)})
    };

    const getGameStatusRender = () => {

        switch (gameStatus.status) {

            case 'playing':
                return <Playing changeGameStatus={changeGameStatus} gameStatus={gameStatus}/>;

            case 'joining':
                return <Joining changeGameStatus={changeGameStatus} gameStatus={gameStatus}/>;

            case 'join':
            default:
                return (
                <>
                    <Join changeGameStatus={changeGameStatus}/>
                    {gameStatus.status === 'nosession' ? <h1 style={{"marginTop": "10px"}}>No Session Found!</h1> : ''}
                </>
                );
        }
    }

    return getGameStatusRender();
}

export default Game;