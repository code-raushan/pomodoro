import React, {useContext} from 'react'
import GlobalContext from '../Context'
const Modes = () => {
    const {mode, setMode}=useContext(GlobalContext)
  return (
    <div className='Modes'>
        <div className={mode==='pomodoro'?'mode-on-click':''} onClick={()=>setMode('pomodoro')}>pomodoro</div>
        <div className={mode==='short-break'?'mode-on-click':''} onClick={()=>setMode('short-break')}>short break</div>
        <div className={mode==='long-break'?'mode-on-click':''} onClick={()=>setMode('long-break')}>long break</div>
    </div>
  )
}

export default Modes