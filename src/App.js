import React, { useState } from "react";
import "./App.css";
import GlobalContext from "./Context";
import Modes from "./components/Modes";
function App() {
  const [mode, setMode] = useState("pomodoro");
  return (
    <GlobalContext.Provider value={{mode, setMode}}>
      <div className="App">
        <h1 style={{ color: "white" }}>pomodoro</h1>
        <Modes />
        <h2>timer</h2>
        <h2>settings</h2>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
