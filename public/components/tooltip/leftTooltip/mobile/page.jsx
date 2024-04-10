import React, { useState, useEffect } from 'react';

const LeftTooltipComponentMobile = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsTooltipVisible(true);
    } else if (event.key === 'Escape') {
      setIsTooltipVisible(false);
    }
  };

  return (
    <div 
      className="tooltip" 
      tabIndex="0" 
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <img 
        width="20" 
        height="20" 
        src="https://img.icons8.com/android/24/pencil.png" 
        alt="pencil"
        aria-label="Change Name Image"
        aria-describedby="tooltipText"
      />
      <span
        id="tooltipText"
        role="tooltip"
        style={{
          visibility: isTooltipVisible ? 'visible' : 'hidden',
          width: '120px',
          backgroundColor: '#f1f1f1',
          color: '#424242',
          textAlign: 'center',
          padding: '5px 10px',
          borderRadius: '7px',
          fontSize: '13px',
          position: 'absolute',
          zIndex: 1,
          right: 'calc(100% + 10px)', 
          bottom: '50%',
          transform: 'translateY(50%)',
        }}
        aria-hidden={!isTooltipVisible}
      >
        Change Name
      </span>
    </div>
  );
};


export default LeftTooltipComponentMobile;


