import React, { useState } from 'react';
 
const DesktopAccordionList = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const wrapper = {
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif",
  };

  const collapsed = {
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  const expanded = {
    display: 'block',
    padding: '10px',
    backgroundColor: '#fafafa',
  };

  const icon = {
    // Assuming the icon rotation involves changing transform
    transform: isExpanded1 ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div className="wrapper">
      {/* University Campus Locations */}
      <div className="collapsed" onClick={() => setIsExpanded1(!isExpanded1)}>
        <p>University Campus Locations</p>
        <div className={`icon ${isExpanded1 ? 'rotate' : ''}`}>
          {/* SVG for icon1 */}
        </div>
      </div>
      {isExpanded1 && (
        <div className="expanded">
          <div className="collapsed item"><p>Camperdown/Darlington</p></div>
          <div className="collapsed item"><p>Camden Campus</p></div>
          <div className="collapsed item"><p>Mallett Street Campus</p></div>
          <div className="collapsed item"><p>Sydney College of the Arts</p></div>
          <div className="collapsed item"><p>Sydney Medical School Campuses</p></div>
        </div>
      )}

      {/* University Faculties And Schools */}
      <div className="collapsed" onClick={() => setIsExpanded2(!isExpanded2)} style={{ marginTop: '8px' }}>
        <p>University Faculties And Schools</p>
        <div className={`icon ${isExpanded2 ? 'rotate' : ''}`}>
          {/* SVG for icon2 */}
        </div>
      </div>
      {isExpanded2 && (
        <div className="expanded">
          <div className="collapsed item"><p>Faculty of Arts and Social Sciences</p></div>
          <div className="collapsed item"><p>Faculty of Engineering</p></div>
          <div className="collapsed item"><p>Faculty of Medicine and Health</p></div>
          <div className="collapsed item"><p>Faculty of Science</p></div>
          <div className="collapsed item"><p>School of Architecture, Design and Planning</p></div>
          <div className="collapsed item"><p>University of Sydney Business School</p></div>
          <div className="collapsed item"><p>Conservatorium of Music</p></div>
          <div className="collapsed item"><p>Sydney Law School</p></div>
        </div>
      )}
    </div>
  );
};

export default DesktopAccordionList;
