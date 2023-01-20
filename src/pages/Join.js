const Join = () => {

    return (
        <fieldset className="border-radius-10px">
            <legend className="text-center"><h1>Join Game</h1></legend>
            <form id="join-game" className="flex-center flex-column">
                <label className="align-self-flex-start" htmlFor="room-code">Room</label>
                <input id="room-code" className="borderless border-radius-5px bg-color-p tertiary-outline" type="text" placeholder="ENTER ROOM CODE"/>
                <label className="align-self-flex-start" htmlFor="display-name">Display Name</label>
                <input id="display-name" className="borderless border-radius-5px bg-color-p tertiary-outline" type="text" placeholder="DISPLAY NAME"/>
                <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Join Game!"/>
            </form>
        </fieldset>
    );
}

export default Join;