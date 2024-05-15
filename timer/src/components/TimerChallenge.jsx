import {useRef, useState} from "react";

import ResultModal from "./ResultModal"

export default function TimerChallenge({tittle, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [timeRamaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRamaining > 0 && timeRamaining < targetTime * 1000;
    if (timeRamaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                onReset={handleReset}
                remainingTime={timeRamaining}/>
            <section className="challenge">
                <h2>{tittle}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}