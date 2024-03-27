import React, { useState } from 'react';

const baseTagStyle = {
  fontSize: '12px',
  fontWeight: '500',
  marginRight: '8px',
  padding: '2px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 0.3s ease, color 0.3s ease', 
};

const tagColors = {
  ochre: { backgroundColor: '#e64626', color: '#ffffff' },
  charcoal: { backgroundColor: '#414143', color: '#ffffff' },
  grey: { backgroundColor: '#e6e7e9', color: '#414143' },
  sandstone: { backgroundColor: '#fbede2', color: '#000000' },
  rose: { backgroundColor: '#d9a8a3', color: '#000000' },
  jacaranda: { backgroundColor: '#8f9ec9', color: '#000000' },
  navy: { backgroundColor: '#1a365e', color: '#ffffff' },
};

const InnovativeTagComponent = () => {
  const [activeTags, setActiveTags] = useState({}); 

  const handleTagClick = (tag) => {
    setActiveTags(prevState => ({ ...prevState, [tag]: !prevState[tag] }));

    setTimeout(() => {
        setActiveTags(prevState => ({ ...prevState, [tag]: false }));
      }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {Object.entries(tagColors).map(([tag, { backgroundColor, color }]) => {
        const isActive = activeTags[tag];
        const style = {
          ...baseTagStyle,
          backgroundColor: isActive ? (['ochre', 'charcoal', 'navy'].includes(tag) ? '#ffffff' : '#000000') : backgroundColor,
          color: isActive ? backgroundColor : color,
        };

        return (
          <span key={tag} style={style} onClick={() => handleTagClick(tag)}>
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </span>
        );
      })}
    </div>
  );
};


export default InnovativeTagComponent;
