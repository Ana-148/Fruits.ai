// src/components/Home.js
import React, { useState } from 'react';
import './css/home.css';
import chat from './css/chat.svg';
import translator from './css/translator.svg';
import faq from './css/faq.svg';
import about from './css/about.svg';
import { useNavigate, Link } from 'react-router-dom';

const AboutPopup = ({ onClose }) => (
  <div style={styles.aboutPopup}>
    <div style={styles.aboutContent}>
      <h2>About Fruit.ai</h2>
      <p>Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven assistant is here to assist! We provide personalized fruit recommendations tailored to your health needs, cooking preferences, and taste buds.</p>
      <button onClick={onClose} style={styles.closeButton}>Close</button>
    </div>
  </div>
);

function Home() {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);

  const handleLogout = () => {
    // Clear local storage or perform any other logout logic here
    localStorage.clear();
    navigate('/', { replace: true });
  };

  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <div className="home-container">
      <h1>Fruit.ai</h1>
      <h4 className="be-healthy-btn">Be Healthy!!</h4>
      <div className="services">
        <div className="service chat">
          <Link to="/chatbot"> 
            <img src={chat} alt="Chat" title="Chat" style={{ width: 100, height: 100 }}/>
            <div>Chat</div>
          </Link> 
        </div>

        <div className="service block"></div>

        <div className="service translator">
          <Link to="/translator"> 
            <img src={translator} alt="Translator" title="Translator" style={{ width: 100, height: 100 }}/>
            <div>Translator</div>
          </Link>
        </div>

        <div className="service faqs">
          <Link to="/faq"> 
            <img src={faq} alt="FAQ" title="FAQ" style={{ width: 100, height: 100 }}/>
            <div>FAQ</div>
          </Link>
        </div>

        <div className="service block"></div>

        <div className="service about" onClick={toggleAbout}>
         
          <img src={about} alt="About" title="About" style={{ width: 100, height: 100 }}/>
          <div>About</div>
        </div>
      </div>
      <button className='logout' onClick={handleLogout}>Logout</button>
      {showAbout && <AboutPopup onClose={toggleAbout} />}
    </div>
  );
}

const styles = {
  aboutPopup: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  aboutContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    width: '90%',
  },
  closeButton: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Home;
