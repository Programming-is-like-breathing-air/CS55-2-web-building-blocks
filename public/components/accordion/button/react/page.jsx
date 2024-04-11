import React, { useState } from 'react';

// Inline CSS styles
const styles = {
    html: {
      fontFamily: '"Inter", sans-serif',
      backgroundColor: '#1d1d1d',
    },
    body: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    p: {
      color: '#1d1d1d',
      margin: 0,
    },
    wrapper: {
      width: '450px',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px',
      backgroundColor: 'white',
    },
    collapsed: {
      width: 'calc(100% - 30px)',
      height: '45px',
      cursor: 'pointer',
      paddingLeft: '15px',
      paddingRight: '15px',
      borderRadius: '10px',
      backgroundColor: 'rgb(249, 115, 22, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      userSelect: 'none',
      ':hover': { // Note: For pseudo-classes like ':hover', consider using CSS-in-JS libraries like styled-components or emotion
        backgroundColor: 'rgb(249, 115, 22, 0.5)',
      },
    },
    collapsedP: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'rgb(155, 65, 0)',
    },
    icon: {
      width: '20px',
      height: '20px',
      transform: 'rotate(180deg)',
    },
    expanded: {
      padding: '15px',
      marginTop: '8px',
      width: 'calc(100% - 30px)',
      fontSize: '15px',
      lineHeight: '22px',
      borderRadius: '10px',
      color: 'rgb(107, 114, 128)',
      backgroundColor: 'rgba(211, 211, 211, 0.3)',
    },
    cta: {
      width: '120px',
      height: '35px',
      borderRadius: '7px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      marginTop: '7px',
      backgroundColor: 'rgb(249, 115, 22)',
      transition: 'all 0.2s ease-in-out',
      userSelect: 'none',
      ':hover': {
        backgroundColor: 'rgb(249, 115, 22, 0.8)',
      },
      ':active': {
        backgroundColor: 'rgb(249, 116, 22)',
      },
    },
    hidden: {
      display: 'none',
    },
    rotate: {
      transform: 'rotate(0deg)',
    },

  };
  

const DesktopAccordionButton = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleExpand1 = () => setIsExpanded1(!isExpanded1);
  const toggleExpand2 = () => setIsExpanded2(!isExpanded2);

  return (
    <div style={styles.wrapper}>
      <div style={styles.collapsed} id="collapsed1" onClick={toggleExpand1}>
        <p>How do I enroll?</p>
        <div style={styles.icon} id="icon1">
          {/* SVG icon */}
        </div>
      </div>
      {isExpanded1 && (
        <div style={styles.expanded} id="expanded1">
          Once you're ready, enrol online by logging in to Sydney Student...
          <div style={styles.cta} className="cta" onClick={() => window.open('https://www.sydney.edu.au/students/', '_blank')}>Enrol now &#8594;</div>
        </div>
      )}
      <div style={styles.collapsed} id="collapsed2" onClick={toggleExpand2}>
        <p>Your responsibilities and privacy</p>
        <div style={styles.icon} id="icon2">
          {/* SVG icon */}
        </div>
      </div>
      {isExpanded2 && (
        <div style={styles.expanded} id="expanded2">
          Your enrolment comes with certain conditions so it's important...
          <div style={styles.cta} className="cta" onClick={() => alert('button click')}>Explore more &#8594;</div>
        </div>
      )}
    </div>
  );
};

export default DesktopAccordionButton;
