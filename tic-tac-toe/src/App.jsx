import {useState} from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function deriveActivePlayer(gameTurns) {
    let activePlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X')
    {
        activePlayer = 'O';
    }
    return activePlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            return [
                {
                    square: {row: rowIndex, col: colIndex},
                    player: currentPlayer
                },
                ...prevTurns];
        });
    }
    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player name="Player 1" symbol="X" isActive={activePlayer==='X'}/>
                <Player name="Player 2" synbol="O" isActive={activePlayer==='O'}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
