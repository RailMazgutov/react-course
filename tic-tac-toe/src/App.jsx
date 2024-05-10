import {useState} from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
function deriveActivePlayer(gameTurns) {
    let activePlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        activePlayer = 'O';
    }
    return activePlayer;
}

function deriveWinner(gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const first = gameBoard[combination[0].row][combination[0].column];
        const second = gameBoard[combination[1].row][combination[1].column];
        const third = gameBoard[combination[2].row][combination[2].column];
        if (first && first === second && first === third) {
            winner = players[first];
        }
    }
    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];
    for (const turn of gameTurns) {
        const {square, player} = turn;
        gameBoard[square.row][square.col] = player;
    }
    return gameBoard;
}


function App() {
    const [players, setPlayers] = useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

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

    function handlePlayerNameChange(symbol, newName) {
        return setPlayers(prevState => {
            return {
                ...prevState,
                [symbol]: newName
            }
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player
                    name={PLAYERS.X}
                    symbol="X"
                    isActive={activePlayer === 'X'}
                    onPlayerNameChange={handlePlayerNameChange}/>
                <Player
                    name={PLAYERS.O}
                    symbol="O"
                    isActive={activePlayer === 'O'}
                    onPlayerNameChange={handlePlayerNameChange}/>
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
            <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
