import React from "react";
import { useReducer } from "react";

const InitialState = { count: 0 };
type CounterState = {
  count: number;
};
type CounterAction = {
  type: string;
  payload: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <>
      count :{state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
export default Counter;
