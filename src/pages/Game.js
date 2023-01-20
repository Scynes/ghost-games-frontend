import { Join, Waiting } from "../components/game";


import { useState } from "react";

const Game = () => {

    const [status, setStatus] = useState('joining');

    const changeGameStatus = (code) => setStatus(code); 

    const getGameStatusRender = () => {
        switch (status) {

            case 'waiting':
                return (
                    <Waiting changeGameStatus={changeGameStatus}/>
                );
             
            default:
                return (
                    <Join changeGameStatus={changeGameStatus}/>
                );
        }
    }

    return getGameStatusRender();
}

export default Game;