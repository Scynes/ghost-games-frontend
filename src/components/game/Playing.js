import { useEffect, useState } from "react";

const Playing = (props) => {

    const SOCKET = props.gameStatus.connectedSocket;

    const [players, setPlayers] = useState([])

    useEffect(() => {

        SOCKET.emit('get players', {
            room: props.gameStatus.room
        })

        SOCKET.on('players', (payload) => {

            setPlayers(payload.players);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main id="game-content" className="flex-center">
            <ul>
                {players.map(player => {

                    return <li key={players.indexOf(player)}>{player}</li>

                })}
            </ul>
        </main>
    );
}

export default Playing;