import React, { useContext } from "react";
import GlobalContext from "../Context";
import iconClose from "../assets/icon-close.svg";
import iconArrowUp from "../assets/icon-arrow-up.svg";
import iconArrowDown from "../assets/icon-arrow-down.svg";
const Modal = () => {
  const {
    mode,
    setSecondsRemaining,
    isModalOpen,
    setIsModalOpen,
    pomodoroTime,
    setPomodoroTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
    setClockStatus,
    setAction,
  } = useContext(GlobalContext);

  const applyAndClose = () => {
    if (mode === "pomodoro") {
      setSecondsRemaining(pomodoroTime * 60);
    } else if (mode === "shortBreak") {
      setSecondsRemaining(shortBreakTime * 60);
    } else if (mode === "longBreak") {
      setSecondsRemaining(longBreakTime * 60);
    }
    setClockStatus("stopped");
    setAction("START");
    setIsModalOpen(false);
  };
  return (
    <div className={`${isModalOpen ? "modal show-modal" : "modal"}`}>
      <div className="modal-container">
        <header className="modal-header">
          <div>Settings</div>
          <div>
            <img
              src={iconClose}
              alt="close-modal"
              style={{ cursor: "pointer" }}
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </header>
        <main className="modal-main">
          <div className="modal-main-header">TIME (IN MINUTES)</div>
          <div className="modal-timer-settings">
            <div>
              <h5>pomodoro</h5>
              <div className="timer-config">
                <div>
                  <input
                    className="input-number-modal"
                    type="number"
                    min="1"
                    max="60"
                    value={pomodoroTime}
                    readOnly
                  />
                </div>
                
                <div className="arrows-input-div">
                  <img
                    className={pomodoroTime === 60 ? "dissapear" : ""}
                    src={iconArrowUp}
                    alt="arrow-up"
                    onClick={() => setPomodoroTime(pomodoroTime + 1)}
                  />
                  <img
                    className={pomodoroTime === 1 ? "dissapear" : ""}
                    src={iconArrowDown}
                    alt="arrow-down"
                    onClick={() => setPomodoroTime(pomodoroTime - 1)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h5>short break time</h5>
              <div className="timer-config">
                <div>
                  <input
                    className="input-number-modal"
                    type="number"
                    min="1"
                    max="60"
                    value={shortBreakTime}
                    readOnly
                  />
                </div>
                
                <div className="arrows-input-div">
                  <img
                    className={shortBreakTime === 60 ? "dissapear" : ""}
                    src={iconArrowUp}
                    alt="arrow-up"
                    onClick={() => setShortBreakTime(shortBreakTime + 1)}
                  />
                  <img
                    className={shortBreakTime === 1 ? "dissapear" : ""}
                    src={iconArrowDown}
                    alt="arrow-down"
                    onClick={() => setShortBreakTime(shortBreakTime - 1)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h5>long break time</h5>
              <div className="timer-config">
                <div>
                  <input
                    className="input-number-modal"
                    type="number"
                    min="1"
                    max="60"
                    value={longBreakTime}
                    readOnly
                  />
                </div>
                <div className="arrows-input-div">
                  <img
                    className={longBreakTime === 60 ? "dissapear" : ""}
                    src={iconArrowUp}
                    alt="arrow-up"
                    onClick={() => setLongBreakTime(longBreakTime + 1)}
                  />
                  <img
                    className={longBreakTime === 1 ? "dissapear" : ""}
                    src={iconArrowDown}
                    alt="arrow-down"
                    onClick={() => setLongBreakTime(longBreakTime - 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div>
            <button className="apply-btn" onClick={applyAndClose}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
