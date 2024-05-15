import {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(
    function ({onReset, remainingTime, targetTime}, ref) {
        const dialog = useRef();
        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            };
        });

        const userLost = remainingTime <= 0;
        const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

        return <dialog className="result-modal" ref={dialog}>
            { userLost && <h2>You {result} </h2> }
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>;
    });

export default ResultModal;