// src/components/Home.js
import React from 'react';
import './css/home.css';
import chat from './css/chat.svg';
import translator from './css/translator.svg';
import faq from './css/faq.svg';
import about from './css/about.svg';


import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <h1>Fruit.AI</h1>
      <h4 className="be-healthy-btn">Be Healthy!!</h4>
      <div className="services">

        <div className="service chat">  
        <Link to="/chatbot"> <img src={chat} alt="Chat" title="Chat" style={{ width: 100, height: 100 }}/>
        </Link> </div>

        <div className="service block"></div>

        <div className="service translator">
        <Link to="/translator"> <img src={translator} alt="Translator" title="Translator" style={{ width: 100, height: 100 }}/>
        </Link></div>

        <div className="service faqs">
        <Link to="/faq"> <img src={faq} alt="FAQ" title="FAQ" style={{ width: 100, height: 100 }}/>
        </Link></div>

        <div className="service block"></div>

        <div className="service about">
        <Link to="/about"><img src={about} alt="About" title="About" style={{ width: 100, height: 100 }}/>
        </Link></div>

      </div>
    </div>
  );
}

export default Home;
