import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  function incrementHandler() {
    dispatch({type: 'increment'});
  }

  const increaseHandler = () => {
      dispatch({type: 'increase', amount: 5});
  }

  function decrementHandler() {
    dispatch({type: 'decrement'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
        <div>
            <button onClick={incrementHandler}>increment</button>
            <button onClick={increaseHandler}>increase by 5</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
