import {useState} from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);
    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer(prevPlayer => prevPlayer === 'X'? 'O':'X');
        setGameTurns(prevTurns => {
            let currentPlayer = 'X';
            if (prevTurns.length > 0 && prevTurns[0].player === 'X')
            {
                currentPlayer = 'O';
            }

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
