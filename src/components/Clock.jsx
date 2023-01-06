// Not a component actually, rather a utility for Timer.jsx(a component)
import React, {useEffect, useRef, useContext} from 'react'
import GlobalContext from '../Context'

export default function Clock(){
    const {clockStatus, setClockStatus, setAction, secondsRemaining, setSecondsRemaining}=useContext(GlobalContext);

    const secondsToDisplay = secondsRemaining%60
    const minutesRemaining = (secondsRemaining-secondsToDisplay)/60
    const minutesToDisplay = minutesRemaining%60

    const hoursToDisplay = (minutesRemaining-minutesToDisplay)/60

    useEffect(()=>{
        if(twoDigits(minutesToDisplay)==="00"&&twoDigits(secondsToDisplay)==="00"&& hoursToDisplay!==1){
            setAction('RESTART')
        }
    });

    useInterval(
        //callback
        ()=>{
        if(secondsRemaining>0){
            setSecondsRemaining(secondsRemaining-1)
        }else{
            setClockStatus('stopped')
        }
    },
    //delay
    clockStatus==='started'?1000:null,//null to stop the interval.
    )
    if(hoursToDisplay===1){
        return (<h1>60:00</h1>)
    }else{
        return (
            <>
                <h1>
                    {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
                </h1>
            </>
        )
    }
}

function useInterval(callback, delay){
    const savedCallback = useRef()

    useEffect(()=>{
        savedCallback.current=callback
    },[callback])

    useEffect(()=>{
        function tick(){
            savedCallback.current()
        } 
        if(delay!==null){
            let id = setInterval(tick, delay)
            return ()=> clearInterval(id)
        }
    }, [delay])
}
const twoDigits = (num)=>String(num).padStart(2,'0')