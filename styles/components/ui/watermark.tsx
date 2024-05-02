import React, { CSSProperties } from 'react';

const Watermark = ({ content, children, count }) => {
  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  const watermarkStyle: CSSProperties = { 
    position: 'absolute',
    fontSize: '34px',
    opacity: '0.1',
    pointerEvents: 'none',
  };

  const step = 100; 
  const columnWidth = 200; // Width of each column

  const watermarkElements = [];
  for (let i = 0; i < count; i++) {
    watermarkElements.push(
      <div
        key={i}
        style={{
          ...watermarkStyle,
          top: `${i * step}px`,
          left: `${i * columnWidth}px`, // Adjust left position
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {watermarkElements}
      <div style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default Watermark;
