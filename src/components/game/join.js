const Join = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        props.changeGameStatus({ 
            status: 'joining', 
            room: document.getElementById('join-game').room.value,
            displayName: document.getElementById('join-game').display.value
        });
    }

    return (
        <fieldset className="border-radius-10px">
            <legend className="text-center"><h2>Join Game</h2></legend>
            <form id="join-game" className="flex-center flex-column" onSubmit={handleSubmit} autoComplete="off">
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