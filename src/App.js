import React from "react";
import "./App.css";
import CounterApp from "./components/CounterApp";

function App() {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    //to limit the count edit value here
    number > 9 || number < 0 ? setNumber(0) : setNumber(number);
  }, [number]);
  const increment = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };
  const decrement = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };
  const reset = () => {
    setNumber(0);
  };
  return (
    <>
      <CounterApp
        increment={increment}
        decrement={decrement}
        number={number}
        reset={reset}
      />
    </>
  );
}

export default App;
