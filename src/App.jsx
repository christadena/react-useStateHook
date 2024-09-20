import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(-10);

    function Increase() {
      setCount((count) => count + 1)
    } 
    function Decrease() {
      setCount(count < 1 ? count : count -1)
    }

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={Increase}>
         Increase
        </button>
        <button onClick={Decrease} >
         Decrease
        </button>
      </div>
   
    </>
  );
}

export default App;
