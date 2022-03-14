import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return <button onClick={() => setValue(prev => prev + 1)}>{value}</button>;
}

export default App;
