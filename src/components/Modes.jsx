import React, {useContext} from 'react'
import GlobalContext from '../Context'
const Modes = () => {
    const {mode, setMode, secondsRemaining, setSecondsRemaining, pomodoroTime, shortBreakTime, longBreakTime, setClockStatus, setAction}=useContext(GlobalContext)

    const changeModeAndTimer = (mode)=>{
      setMode(mode);
      if(mode==="pomodoro"){
        setSecondsRemaining(pomodoroTime*60)
      }else if(mode==='shortBreak'){
        setSecondsRemaining(shortBreakTime*60)
      }else if(mode==='longBreak'){
        setSecondsRemaining(longBreakTime*60)
      }
      setClockStatus('stopped')
      setAction('START')
    }



  return (
    <div className='Modes'>
        <div className={mode==='pomodoro'?'mode-on-click':''} onClick={()=>changeModeAndTimer('pomodoro')}>pomodoro</div>
        <div className={mode==='shortBreak'?'mode-on-click':''} onClick={()=>changeModeAndTimer('shortBreak')}>short break</div>
        <div className={mode==='longBreak'?'mode-on-click':''} onClick={()=>changeModeAndTimer('longBreak')}>long break</div>
    </div>
  )
}

export default Modes