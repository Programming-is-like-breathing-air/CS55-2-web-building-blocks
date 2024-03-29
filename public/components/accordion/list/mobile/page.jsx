import React, { useState } from 'react';
const styles = {
    wrapper: {
      width: '100%',
      padding: '7px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px',
      backgroundColor: 'white',
    },
    collapsed: {
      width: 'calc(100% - 28px)',
      height: '40px',
      cursor: 'pointer',
      paddingLeft: '14px',
      paddingRight: '14px',
      borderRadius: '10px',
      backgroundColor: 'rgba(249, 115, 22, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      userSelect: 'none',
      ':hover': {
        backgroundColor: 'rgba(249, 115, 22, 0.5)',
      },
    },
    collapsedP: {
      fontSize: '14px',
      fontWeight: '500',
      color: 'rgb(155, 65, 0)',
    },
    icon: {
      width: '20px',
      height: '20px',
      transform: 'rotate(180deg)',
    },
    svg: {
      fill: 'rgb(155, 65, 0)',
    },
    expanded: {
      width: 'calc(100% - 30px)',
      fontSize: '15px',
      lineHeight: '22px',
    },
    item: {
      width: '100%',
      marginTop: '7px',
      backgroundColor: 'rgba(211, 211, 211, 0.3)',
      ':hover': {
        backgroundColor: 'rgba(211, 211, 211, 0.7)',
      },
    },
    itemP: {
      color: 'rgb(62, 63, 65)',
    },
  };
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div style={styles.collapsed} onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <div style={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div style={styles.expanded}>
          {content.map((item, index) => (
            <div key={index} style={styles.item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileAccordionList = () => {
  const campusLocations = [
    "Camperdown/Darlington",
    "Camden Campus",
    "Mallett Street Campus",
    "Sydney College of the Arts",
    "Sydney Medical School Campuses"
  ];

  const universityFaculties = [
    "Faculty of Arts and Social Sciences",
    "Faculty of Engineering",
    "Faculty of Medicine and Health",
    "Faculty of Science",
    "School of Architecture, Design and Planning",
    "University of Sydney Business School",
    "Conservatorium of Music",
    "Sydney Law School"
  ];

  return (
    <div className="wrapper">
      <Accordion title="University Campus Locations" content={campusLocations} />
      <Accordion title="University Faculties And Schools" content={universityFaculties} />
    </div>
  );
};

export default MobileAccordionList;
