import React, { useState, useEffect } from 'react';

const BasicTooltipComponentMobile = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setIsTooltipVisible(true);
      } else if (event.key === 'Escape') {
        setIsTooltipVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

 
  const styles = {
    tooltipContainer: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
    },
    tooltipText: {
      visibility: isTooltipVisible ? 'visible' : 'hidden',
      width: '120px',
      backgroundColor: '#f1f1f1',
      color: '#424242',
      textAlign: 'center',
      padding: '6px 10px',
      fontSize: '13px',
      borderRadius: '7px',
      position: 'absolute',
      zIndex: 1,
      // The position of tooltip
      top: '30px',
      left: '50%',
      transform: 'translateX(-50%)', 
    },
    tooltipArrow: {
      position: 'absolute',
      top: '-6px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderBottom: '6px solid #f1f1f1',
    },
    imageIcon: {
      width: '20px',
      height: '20px',
    },
  };

  return (
    <div style={styles.tooltipContainer}
         onMouseEnter={() => setIsTooltipVisible(true)}
         onMouseLeave={() => setIsTooltipVisible(false)}>
      <img 
        src="https://img.icons8.com/android/24/pencil.png" 
        alt="pencil"
        style={styles.imageIcon}
      />
      <div style={styles.tooltipText} aria-hidden={!isTooltipVisible}>
        Change Name
        <div style={styles.tooltipArrow}></div>
      </div>
    </div>
  );
};

export default BasicTooltipComponentMobile;


