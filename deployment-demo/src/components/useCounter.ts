import { useReducer } from "react";

type State = {
  count: number;
};

type Action = "increment" | "decrement" | "reset";

const counterReducer = (state: State, action: Action): State => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

export const useCounter = () => {

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return {
    count: state.count,
    increment: () => dispatch("increment"),
    decrement: () => dispatch("decrement"),
    reset: () => dispatch("reset"),
  }
}

