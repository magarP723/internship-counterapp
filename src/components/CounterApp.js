import React from "react";
import "../App.css";

const CounterApp = ({ increment, decrement, number, reset }) => {
  return (
    <>
      <div className="counter-display">
        <div className="count-content">{number}</div>
      </div>
      <div className="buttons">
        <button onClick={increment}>
          <h1>+</h1>
        </button>
        <button onClick={reset}>
          <h2>reset</h2>
        </button>
        <button onClick={decrement}>
          <h1>-</h1>
        </button>
      </div>
    </>
  );
};

export default CounterApp;
