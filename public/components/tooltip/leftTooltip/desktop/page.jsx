import React, { useState, useEffect } from 'react';

const LeftTooltipComponent = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // 添加键盘事件监听来控制 Tooltip 的显示与隐藏
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsTooltipVisible(true);
    } else if (event.key === 'Escape') {
      setIsTooltipVisible(false);
    }
  };

  // 使用 useEffect 来添加和清理事件监听器可能更合适，但为简化，这里直接在元素上应用事件处理

  return (
    <div 
      className="tooltip" 
      tabIndex="0" // 使 div 可以监听键盘事件
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
          right: 'calc(100% + 10px)', // 显示在左侧
          bottom: '50%', // 垂直居中
          transform: 'translateY(50%)',
        }}
        aria-hidden={!isTooltipVisible}
      >
        Change Name
      </span>
    </div>
  );
};


export default LeftTooltipComponent;


