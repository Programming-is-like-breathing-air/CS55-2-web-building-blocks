import React, { useState } from 'react';
import './styles.css'; // 确保你有一个styles.css文件，并且它在同一目录下

const App = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <div className="wrapper">
      {/* 第一部分 */}
      <div className={`collapsed ${isExpanded1 ? 'hidden' : ''}`} onClick={() => setIsExpanded1(!isExpanded1)}>
        <p>How do I enroll?</p>
        <div className="icon">
          {/* SVG icon */}
        </div>
      </div>
      <div className={`expanded ${isExpanded1 ? '' : 'hidden'}`}>
        Once you're ready, enrol online by logging in to Sydney Student. Go to "My studies" then "Enrolment" and you're set to go. There are several sections to complete as part of your enrolment. You can log out and return later if you need to.
        <div className="cta">Enrol now &#8594;</div>
      </div>

      {/* 第二部分 */}
      <div className={`collapsed ${isExpanded2 ? 'hidden' : ''}`} onClick={() => setIsExpanded2(!isExpanded2)} style={{marginTop: '8px'}}>
        <p>Your responsibilities and privacy</p>
        <div className="icon">
          {/* SVG icon */}
        </div>
      </div>
      <div className={`expanded ${isExpanded2 ? '' : 'hidden'}`}>
        Your enrolment comes with certain conditions so it's important to understand them. You should also familiarise yourself with our privacy policy regarding the personal information you supply during enrolment.
        <div className="cta" style={{width: '130px'}}>Explore more &#8594;</div>
      </div>
    </div>
  );
};

export default App;
