import classes from './Counter.module.css';

import {useDispatch, useSelector} from 'react-redux'
import { counterActions } from '../store/counter';

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    function incrementHandler() {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    function decrementHandler() {
        dispatch(counterActions.decrement());
    }

    return (<main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={increaseHandler}>increase by 5</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>);
};

export default Counter;
