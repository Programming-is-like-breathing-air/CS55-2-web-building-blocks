import React from "react";
import Head from 'next/head';
import "../styles.css";

const ChatComponent = () => {

    const [userInput, setUserInput] = useState("");

    // Update user input
    const handleInputChange = (e) => {
      setUserInput(e.target.value);
    };
  
    // Show popup when user clicks submit button
    const handleSubmit = () => {
      alert(`The user input is: ${userInput}`);
      setUserInput(""); // Empty the user input
    };

  return (
    <div className="container">
      <p className="title">Faculty of Engineering</p>
      <div className="title-bottom">
        <div className="title-bottom-wrapper available-wrapper">
          <div className="title-bottom-dot available-dot"></div>
        </div>
        <p>Available | Representative Katie McKenzie</p>
      </div>
      <hr />

      <div className="messages">
        <div className="secondary">
          <p className="secondary-text">
            Hello, my name is Katie, I'm the faculty of engineering rep. How can
            I help you today? are you ok with that?杰尼索夫喀纳斯发
          </p>
        </div>
        <div className="primary">
          <p className="primary-text">Morning.</p>
        </div>
        <div className="secondary">
          <p className="secondary-text">How can I help? 🙂</p>
        </div>
        <div className="primary">
          <p className="primary-text">
            So I have a few questions in regards with enrollment for next
            semester.
          </p>
        </div>
        <div className="secondary">
          <p className="secondary-text">
            Great! What are your questions? I'm happy to help.
          </p>
        </div>
        <div className="primary">
          <p className="primary-text">
            What are the prerequisites for aerospace engineering part II?
          </p>
        </div>
        <div className="secondary">
          <p className="secondary-text">
            Just one sec! I'll get that info for you.
          </p>
        </div>
      </div>

      <hr />
      <div className="button-group">
        <input className="input" type="text" placeholder="Type your message..." />
        <div className="cta">
          <div className="send-chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 512 512"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

