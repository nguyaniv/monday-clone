import React from 'react';

const Action = ({ action }) => {
  const { src, color, text, border } = action;
  return (
    <div style={{ border: `1px solid ${border}` }}>
      <input
        style={{
          filter: `hue-rotate(${color}deg)`,
        }}
        type="checkbox"
      />
      <div className="icon-text">
        <img width={'40px'} src={src} alt="test" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Action;
