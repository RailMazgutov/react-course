import {useRef, useState} from "react";

import ResultModal from "./ResultModal"

export default function TimerChallenge({tittle, targetTime}) {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>}
            <section className="challenge">
                <h2>{tittle}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}