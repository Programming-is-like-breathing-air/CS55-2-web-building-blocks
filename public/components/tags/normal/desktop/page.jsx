import React from 'react';

const NormalTagComponent = () => {
  // Creating style objects for each tag type
  const baseTagStyle = {
    fontSize: '12px',
    fontWeight: '500',
    marginRight: '8px',
    padding: '2px 10px',
    borderRadius: '4px',
  };

  const tagStyles = {
    ochreTag: { ...baseTagStyle, backgroundColor: '#e64626', color: '#ffffff' },
    charcoalTag: { ...baseTagStyle, backgroundColor: '#414143', color: '#ffffff' },
    greyTag: { ...baseTagStyle, backgroundColor: '#e6e7e9', color: '#414143' },
    sandstoneTag: { ...baseTagStyle, backgroundColor: '#fbede2', color: '#000000' },
    roseTag: { ...baseTagStyle, backgroundColor: '#d9a8a3', color: '#000000' },
    jacarandaTag: { ...baseTagStyle, backgroundColor: '#8f9ec9', color: '#000000' },
    navyTag: { ...baseTagStyle, backgroundColor: '#1a365e', color: '#ffffff' },
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <span style={tagStyles.ochreTag}>Ochre</span>
      <span style={tagStyles.charcoalTag}>Charcoal</span>
      <span style={tagStyles.greyTag}>Grey</span>
      <span style={tagStyles.sandstoneTag}>Sandstone</span>
      <span style={tagStyles.roseTag}>Rose</span>
      <span style={tagStyles.jacarandaTag}>Jacaranda</span>
      <span style={tagStyles.navyTag}>Navy</span>
    </div>
  );
};

export default NormalTagComponent;