import React, { useState } from 'react';
import './css/home.css';
import chat from './css/chat.svg';
import translator from './css/translator.svg';
import faq from './css/faq.svg';
import about from './css/about.svg';
import { useNavigate, Link } from 'react-router-dom';

const AboutPopup = ({ onClose }) => (
  <div className="about-popup">
    <div className="about-content">
      <h2>About Fruit.ai</h2>
      <p>Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven assistant is here to assist! We provide personalized fruit recommendations tailored to your health needs, cooking preferences, and taste buds.</p>
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  </div>
);

function Home() {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };

  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <div className="home-container">
      <h1>Fruit.ai</h1>
      <h4 className="be-healthy-btn">Be Healthy!!</h4>
      <div className="services">
        <Link to="/chatbot" className="service chat">
          <img src={chat} alt="Chat" title="Chat" />
          <div>Chat</div>
        </Link>
        <Link to="/translator" className="service translator">
          <img src={translator} alt="Translator" title="Translator" />
          <div>Translator</div>
        </Link>
        <Link to="/faq" className="service faqs">
          <img src={faq} alt="FAQ" title="FAQ" />
          <div>FAQ</div>
        </Link>
        <div className="service about" onClick={toggleAbout}>
          <img src={about} alt="About" title="About" />
          <div>About</div>
        </div>
      </div>
      <button className='logout' onClick={handleLogout}>Logout</button>
      {showAbout && <AboutPopup onClose={toggleAbout} />}
    </div>
  );
}

export default Home;
