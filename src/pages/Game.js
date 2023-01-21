import { Join, Playing, Waiting } from "../components/game";


import { useState, useEffect } from "react";

const Game = () => {

    const [status, setStatus] = useState('join');

    const changeGameStatus = (code) => setStatus(code); 

    useEffect(() => {

        

    }, []);

    console.log(status);

    const getGameStatusRender = () => {
        switch (status) {

            case 'playing':
                return <Playing changeGameStatus={changeGameStatus}/>;

            case 'joining':
                return <Waiting changeGameStatus={changeGameStatus}/>;


            case 'join':
            default:
                return (
                <>
                    <Join changeGameStatus={changeGameStatus}/>
                    {status === 'nosession' ? <h1 style={{"marginTop": "10px"}}>No Session Found!</h1> : ''}
                </>
                );
        }
    }

    return getGameStatusRender();
}

export default Game;