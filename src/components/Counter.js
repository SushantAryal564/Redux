import classes from "./Counter.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter: show } = useSelector((state) => {
    return state.counter;
  });
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(10)); // {payload: 10}
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={increaseHandler}>Decrease by 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
