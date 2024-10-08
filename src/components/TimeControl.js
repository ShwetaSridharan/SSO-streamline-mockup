import React from 'react';

const TimeControl = ({ currentTime, onFastForward }) => {
  return (
    <div className="asana-card time-control">
      <h3>Simulated Time: {currentTime.toLocaleString()}</h3>
      <button onClick={onFastForward}>Fast Forward 24h</button>
    </div>
  );
};

export default TimeControl;