import { useEffect } from "react";
import IO from 'socket.io-client';

const Joining = (props) => {

    useEffect(() => {
        const SOCKET = IO('https://ghost-games.herokuapp.com');

        SOCKET.on('user connect', () => {
            
            SOCKET.emit('join game', {
                room: props.gameStatus.room,
                displayName: props.gameStatus.displayName
            });
        });

        SOCKET.on('joined', () => {

            setTimeout(() => {
                
                props.changeGameStatus({
                    status: 'playing',
                    connectedSocket: SOCKET
                });

            }, 5000);
        });

        SOCKET.on('no session', () => {

            setTimeout(() => {

                props.changeGameStatus({
                    status: 'nosession'
                });

            }, 2000);
        });
    });

    return (
        <div>
            <h2 className='loading'>Joining Session</h2>
        </div>
    )
}

export default Joining;