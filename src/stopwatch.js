// import React from 'react';

// const Stopwatch = () => {
//   return (
  
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-primary ">
//       <div className="card w-70 h-auto shadow-lg bg-white rounded border border-info">
//         <div className="card-body text-center">
//           <h5 className="card-title"><b>Stop Watch</b></h5>
//           <p className="card-text">Start and stop your Watch here..</p>
//           <div><b>Minute : Second</b></div>
//           <h5>00 : 00</h5>
         
//           <button type="button" className="btn btn-success mx-2">Start</button>
//           <button type="button" className="btn btn-danger mx-2">Stop</button>
//         </div>
//       </div>
//     </div>
   
//   );
// };

// export default Stopwatch;





import React, { useState } from 'react';

const Stopwatch = () => {
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const handleMinuteChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleSecondChange = (event) => {
    setSeconds(event.target.value);
  };

  return (
<div className='input-container'>
        <div className="input-box">
          
          <p >Start and stop your Watch here..</p>
          <input id='hours' placeholder='HH'  />
          <input id='Minutes' placeholder='MM'  />
          <input id='Seconds' placeholder='SS'  />
    
          <button type="button" className="btn btn-success mx-2">Start</button>
          <button type="button" className="btn btn-danger mx-2">Stop</button>
        </div>
        </div>
    

  );
};

export default Stopwatch;
