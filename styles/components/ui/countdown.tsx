import React, { useState, useEffect } from 'react';
import { differenceInMilliseconds, intervalToDuration } from 'date-fns';

export const Countdown = ({ targetDate }) => {
  
  const calculateTimeLeft = () => {
    const difference = differenceInMilliseconds(new Date(targetDate), new Date());
    const { days, hours, minutes, seconds } = intervalToDuration({ start: 0, end: difference });
    
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      {Object.keys(timeLeft).length === 0 ? (
        <span>Time out!</span>
      ) : (
        <div>
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{days}天{' '}</span> 
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{hours}时{' '}</span> 
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{minutes}分{' '}</span> 
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{seconds}秒</span> 
        </div>
      )}
    </div>
  );
};

export const Scountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = differenceInMilliseconds(new Date(targetDate), new Date());
    const { days, hours, minutes, seconds } = intervalToDuration({ start: 0, end: difference });
    
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      {Object.keys(timeLeft).length === 0 ? (
        <span>Time out!</span>
      ) : (
        <div>
          
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{hours < 10 ? `0${hours}` : hours}</span>:
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
      )}
    </div>
  );
};

export default { Countdown, Scountdown };
