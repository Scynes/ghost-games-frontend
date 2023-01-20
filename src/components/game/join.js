import axios from "axios";

const Join = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        getGameSession(4).then(() => {
            console.log('worked')
        })
    }

    const getGameSession = async (roomCode) => {

        const result = await axios.get('https://api.github.com/users/xiaotian/repos');

        return result;
    }

    return (
        <fieldset className="border-radius-10px">
            <legend className="text-center"><h1>Join Game</h1></legend>
            <form id="join-game" className="flex-center flex-column" onSubmit={handleSubmit}>
                <label className="align-self-flex-start" htmlFor="room-code">Room</label>
                <input id="room-code" name="room" className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" placeholder="ENTER ROOM CODE"/>
                <label className="align-self-flex-start" htmlFor="display-name">Display Name</label>
                <input id="display-name" name="display" className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" placeholder="DISPLAY NAME"/>
                <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Join Game!"/>
            </form>
        </fieldset>
    );
}

export default Join;