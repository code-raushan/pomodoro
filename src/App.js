import React, { useState } from "react";
import "./App.css";
import GlobalContext from "./Context";
import Modes from "./components/Modes";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import Modal from "./components/Modal";
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
        <Timer/>
        <Settings/>
        <Modal/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
