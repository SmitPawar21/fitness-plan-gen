import React, { useEffect, useState } from 'react';

export const Clock = ()=> {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#008f6db0' }}>
      {formatTime(time)}
    </div>
  );
};
