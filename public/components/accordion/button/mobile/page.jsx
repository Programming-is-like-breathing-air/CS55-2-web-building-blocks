import React, { useState } from 'react';

const styles = {
  wrapper: {
    maxWidth: '600px',
    margin: 'auto',
    fontFamily: `'Inter', sans-serif`,
  },
  collapsed: {
    cursor: 'pointer',
    padding: '20px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  expanded: {
    padding: '20px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  icon: {
    transition: 'transform 0.2s ease-in-out',
  },
  cta: {
    marginTop: '10px',
    display: 'inline-block',
    textDecoration: 'none',
    color: '#007bff',
  },
};
const MobileAccordionWithButton = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.collapsed} onClick={() => setIsExpanded1(!isExpanded1)}>
        <p>How do I enroll?</p>
        <div style={styles.icon}>{/* SVG 图标 */}</div>
      </div>
      {isExpanded1 && (
        <div style={styles.expanded}>
         Once you're ready, enrol online by logging in to Sydney Student. Go to
        "My studies" then "Enrolment" and you're set to go. There are several
        sections to complete as part of your enrolment. You can log out and
        return later if you need to.
        <div class="cta">Enrol now &#8594;</div>
        </div>
      )}
      <div style={styles.collapsed} onClick={() => setIsExpanded2(!isExpanded2)} >
        <p>Your responsibilities and privacy</p>
        <div style={styles.icon}>{/* SVG 图标 */}</div>
      </div>
      {isExpanded2 && (
        <div style={styles.expanded}>
           Your enrolment comes with certain conditions so it's important to
        understand them. You should also familiarise yourself with our privacy
        policy regarding the personal information you supply during enrolment.
        <div class="cta">Explore more &#8594;</div>
        </div>
      )}
    </div>
  );
};

export default MobileAccordionWithButton;
