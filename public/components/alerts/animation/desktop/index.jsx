import React from 'react';
import './styles.css'; // 假设我们的样式保存在Button.css文件中

const Button = ({ text, onClick }) => {
  return (
    <button className="shadcn-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
