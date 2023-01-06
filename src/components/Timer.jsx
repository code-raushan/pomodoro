import React, { useContext } from "react";
import GlobalContext from "../Context";
import Clock from "./Clock";

const Timer = () => {
  const { action, setClockStatus, setAction, mode, setSecondsRemaining, pomodoroTime, shortBreakTime, longBreakTime } = useContext(GlobalContext);
  const handleAction = () => {
    if (action === "START") {
      setClockStatus("started");
      setAction("PAUSE");
    } else if (action === "PAUSE") {
      setClockStatus("stopped");
      setAction("START");
    }
  };
  const handleReset = ()=>{
    if(action==="PAUSE" || action==="START" || action==='RESET'){
        setClockStatus('stopped')
        if(mode==='pomodoro'){
            setSecondsRemaining(pomodoroTime*60)
        }else if(mode==='shortBreak'){
            setSecondsRemaining(shortBreakTime*60)
        }else if(mode==='longBreak'){
            setSecondsRemaining(longBreakTime*60)
        }
        setAction('START')
    }
  }
  return (
    <div>
      <div className="timer">
        <Clock />
      </div>
      <div className="timer-btn-container">
        <button className="timer-btn" onClick={handleAction}>
          {action}
        </button>
        <button className="timer-btn" onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
};

export default Timer;
