import { useState } from "react";
// import AutomaticBatching from "./demo/AutomaticBatching";
// import StartTransition from "./demo/StartTransition";
// import DeferredValue from "./demo/DeferredValue";
// import SuspenseCom from "./demo/SuspenseCom";

function App() {
  const [value, setValue] = useState(0);
  // return <button onClick={() => setValue((prev) => prev + 1)}>{value}</button>;
  // return <AutomaticBatching />;
  // return <StartTransition />;
  // return <DeferredValue />;
  // return <SuspenseCom />;
  return (
    <div>
      <span>111</span>
      <BBB />
    </div>
  );
}

const arr = new Array(30000).fill(0);

function BBB() {
  return (
    <div>
      {arr.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
