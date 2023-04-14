import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default Toggle;
