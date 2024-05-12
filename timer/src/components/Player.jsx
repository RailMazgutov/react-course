import {useRef, useState} from "react";

export default function Player({onPlayerNameSaved}) {
    const [playerName, setPlayerName] = useState('unknown entity');
    const playerNameInput = useRef();

    function handleSetName() {
        setPlayerName(playerNameInput.current.value);
    }

    return (
        <section id="player">
            <h2>Welcome {playerName}</h2>
            <p>
                <input ref={playerNameInput} type="text"/>
                <button onClick={handleSetName}>Set Name</button>
            </p>
        </section>
    );
}
