import React, { useState } from 'react';

const AnimatedTooltipComponent = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);


  const styles = {
    tooltip: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    tooltiptext: {
      visibility: isTooltipVisible ? 'visible' : 'hidden',
      width: '120px',
      borderRadius: '7px',
      backgroundColor: '#f1f1f1',
      color: '#424242',
      textAlign: 'center',
      padding: '6px 10px',
      fontSize: '13px',
      position: 'absolute',
      zIndex: 1,
      left: '150%',
      opacity: isTooltipVisible ? 1 : 0,
      transition: 'opacity 1s',
    }
  };

  return (
    <div 
      style={styles.tooltip}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') setIsTooltipVisible(true);
        else if (event.key === 'Escape') setIsTooltipVisible(false);
      }}
      tabIndex="0" 
    >
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/android/24/pencil.png"
        alt="pencil"
        aria-label="Change Name Image"
        aria-describedby="tooltipText"
      />
      <span style={styles.tooltiptext} id="tooltipText" role="tooltip" aria-hidden={!isTooltipVisible}>
        Change Name
      </span>
    </div>
  );
};

export default AnimatedTooltipComponent;