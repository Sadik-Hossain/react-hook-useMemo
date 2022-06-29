import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

// const fib = (n) => {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// };
//* ekhn fib ke jodi app function er vitor e niye jai se khetre fib ke useCallback e rakhte hobe, ta na hole bar bar create hobe fn

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");
  // const fibNumber = fib(userNumber);
  //* useMemo memoize the result of a func. that is  called
  //* useCallback memoize the function that can then be called
  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);
  const fibNumber = useMemo(() => fib(userNumber), [userNumber]);
  useEffect(() => {
    console.log(`New number`);
  }, [fibNumber]);
  return (
    <main className="App">
      <h1>useMemo</h1>
      <label>Fibonacci sequence:</label>
      <input
        type="number"
        value={userNumber}
        placeholder="position"
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p>Number: {fibNumber || "--"}</p>
      <br />
      <br />
      <label>Random Input:</label>
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
