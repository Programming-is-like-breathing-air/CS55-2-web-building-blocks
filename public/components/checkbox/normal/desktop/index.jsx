import React, { useState } from 'react';

const CheckboxComponent = () => {
  const [checkedState, setCheckedState] = useState([false, false]);

  const handleOnChange = (index) => {
    const updatedCheckedState = checkedState.map((item, itemIndex) =>
      index === itemIndex ? !item : item
    );
    setCheckedState(updatedCheckedState);
    
    
    if (!updatedCheckedState[index]) {
      alert(`You have unselected the "${index === 0 ? 'Default checkbox' : 'Checked state'}" option.`);
    } else {
      alert(`You have chosen the "${index === 0 ? 'Default checkbox' : 'Checked state'}" option.`);
    }
  };

  
  const checkboxLabels = ['Default checkbox', 'Checked state'];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'system-ui', 'Helvetica', sans-serif",
      margin: 0,
    }}>
      {checkboxLabels.map((label, index) => (
        <div key={index} className="checkbox-container" style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
        }}>
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            className="checkbox"
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: checkedState[index] ? '#e64626' : '#f3f4f6',
              border: checkedState[index] ? '1px solid #e64626' : '1px solid #d1d5db',
              borderRadius: '4px',
              appearance: 'none',
              cursor: 'pointer',
              position: 'relative',
            }}
          />
          {checkedState[index] && (
            <span style={{
              content: '""',
              position: 'absolute',
              left: '4px',
              top: '2px',
              width: '5px',
              height: '10px',
              border: 'solid white',
              borderWidth: '0 2px 2px 0',
              transform: 'translateY(-50%) rotate(45deg)',
            }}></span>
          )}
          <label htmlFor={`checkbox-${index}`} className="checkbox-label" style={{
            marginLeft: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#1f2937',
            cursor: 'pointer',
          }}>
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxComponent;
