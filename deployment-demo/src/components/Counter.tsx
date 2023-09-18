import { useCounter } from "./useCounter";
import classes from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const counter = useCounter();
  return (
    <div>
      <p>Count: {counter.count}</p>
      <button className={classes.button} onClick={() => counter.increment()}>
        Increment
      </button>
      <button className={classes.button} onClick={() => counter.decrement()}>
        Decrement
      </button>
      <button className={classes.button} onClick={() => counter.reset()}>
        Reset
      </button>
    </div>
  );
};
