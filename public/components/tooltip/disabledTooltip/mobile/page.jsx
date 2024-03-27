import React, { useState } from 'react';

const DisableTooltipButtonMobile = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const buttonStyles = {
    width: '160px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#e64626',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
    color: 'white',
    border: 'none',
    cursor: 'not-allowed',
  };

  const tooltipStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const tooltipTextStyles = {
    visibility: isTooltipVisible ? 'visible' : 'hidden',
    width: '150px',
    borderRadius: '7px',
    backgroundColor: '#f1f1f1',
    color: '#424242',
    textAlign: 'center',
    padding: '6px 10px',
    fontSize: '13px',
    position: 'absolute',
    zIndex: 1,
    top: '60px',
  };

  const arrowStyles = {
    position: 'absolute',
    width: '0',
    height: '0',
    borderStyle: 'solid',
    borderWidth: '0 6px 6px 6px',
    borderColor: 'transparent transparent #f1f1f1 transparent',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '-6px', // Adjust this value to move the arrow closer or further from the tooltip
  };

  return (
    <div 
      style={tooltipStyles} 
      onMouseEnter={() => setIsTooltipVisible(true)} 
      onMouseLeave={() => setIsTooltipVisible(false)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') setIsTooltipVisible(true);
        else if (event.key === 'Escape') setIsTooltipVisible(false);
      }}
      tabIndex="0" // Make div focusable to catch keyboard events
    >
      <button style={buttonStyles}>
        DISABLED BUTTON
      </button>
      <span style={tooltipTextStyles}>
        Disabled Tooltip
        {/* Pseudo-element for arrow, simulate using a div */}
        <div style={arrowStyles} />
      </span>
    </div>
  );
};

export default DisableTooltipButtonMobile;
