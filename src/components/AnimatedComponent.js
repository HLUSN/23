import React from 'react';
import './AnimatedComponent.css';

const AnimatedComponent = () => {
  return (
    <div style={{ textAlign: "center", margin: "1rem 0" }}>
      <img
        src={process.env.PUBLIC_URL + '/6.gif'}
        alt="Animated Visual"
        style={{ width: "120px", borderRadius: "50%" }}
        className="animated-cyber"
      />
    </div>
  );
};

export default AnimatedComponent;