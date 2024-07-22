
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(parseInt(0));
  const [seconds, setSeconds] = useState(parseInt(0));
  const [timerId, setTimerId] = useState(parseInt(0));

  const handleStart = () => {
    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      alert('Enter valid time');
      return;
    }

    else {
      if (minutes > 59 || seconds > 59) {
        alert('Enter  valid Minutes and seconds');
        return;
      }
      else {
        setIsStart(true);
      }
    }

  }
  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours)
  }

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  }

  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  }
  const handleInput = (e) => {
    console.log(e.target.value, e.target.id)
    const value = parseInt(e.target.value);
    const id = e.target.id;

    if (id === "hours") {
      setHours(value)
    } else if (id === "minutes") {
      setMinutes(value)
    }
    else {
      setSeconds(value)
    }
  }

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    }
    else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (sec === 0 && min === 0 && hr == 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
    }
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid)
      }, 1000)
      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    }
  }
    , [isStart, hours, minutes, seconds])
  console.log(hours, minutes, seconds)
  return (

    <div className="App">

      <h1>Stop Watch</h1>
      <div className="container" >
      {
        !isStart && (
          <div className='input-container'>
            <div className='input-box'>
              <input id='hours' placeholder='HH' onChange={handleInput} />
              <input id='minutes' placeholder='MM' onChange={handleInput} />
              <input id='seconds' placeholder='SS' onChange={handleInput} />

            </div>
            <button type="button" className="btn btn-success m-3" onClick={handleStart}>Start</button>
          </div>

        )}


      {
        isStart && (<div className='show-container'>
          <div className='timer-box'>
          
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>

          </div>
          <div className='action-box'>
            {
              !isPaused && <button className='timer-btn' onClick={handlePause}>Pause</button>
            }
            {
              isPaused && <button className='timer-btn' onClick={handleResume}>Resume</button>
            }
            <button className='timer-btn' onClick={handleReset}>Reset</button>
          </div>
        </div>
        )}
        </div>
    </div>

  );
}

export default App;
