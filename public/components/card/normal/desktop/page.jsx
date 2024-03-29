import React from 'react';

const CardComponent = () => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    margin: '50px auto',
  };

  const buttonStyle = {
    backgroundColor: '#e64626',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '10px 0',
  };

  // 处理点击事件
  const handleExploreMoreClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div style={cardStyle}>
      <h2>Contact us</h2>
      <p>Submit a partnership enquiry, you can also make a donation by contacting the University revenue team.</p>
      <button onClick={handleExploreMoreClick} style={buttonStyle}>
        Explore more →
      </button>
    </div>
  );
};

export default CardComponent;
