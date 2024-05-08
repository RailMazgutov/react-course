import {useState} from "react";

export default function Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let playerNameEdit = <span className="player-name">{playerName}</span>;
    if(isEditing) {
        playerNameEdit = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
        <li>
            <span className="player">
                {playerNameEdit}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing?"Edit":"Save"}</button>
        </li>);
}