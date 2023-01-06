import React, { useState } from "react";
import "./App.css";
import GlobalContext from "./Context";
import Modes from "./components/Modes";
function App() {
  const [mode, setMode] = useState("pomodoro");
  const [pomodoroTime, setPomodoroTime]=useState(30)
  const [shortBreakTime, setShortBreakTime]=useState(5)
  const [longBreakTime, setLongBreakTime]=useState(15)
  const [action, setAction]=useState('START')
  const [clockStatus, setClockStatus]=useState('stopped')
  const [isModalOpen, setIsModalOpen]=useState(false)
  const [secondsRemaining, setSecondsRemaining]=useState(1800)
  return (
    <GlobalContext.Provider value={{mode, setMode, pomodoroTime, setPomodoroTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime, action, setAction, clockStatus, setClockStatus, isModalOpen, setIsModalOpen, secondsRemaining, setSecondsRemaining}}>
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
