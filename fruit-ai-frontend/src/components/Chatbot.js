import React, { useState } from 'react';
import "./css/chatbot.css";


function FruitFlashcards() {
  const [userInput, setUserInput] = useState('');
  const [flippedCards, setFlippedCards] = useState({});
  const [generatedContent, setGeneratedContent] = useState('');
  const genAI = new GoogleGenerativeAI("AIzaSyAN-bj1PVsH1t3ptw0qKZ5BKdovZ-agFj4");

  const flipCard = (fruit) => {
    setFlippedCards((prevCards) => ({ ...prevCards, [fruit]: !prevCards[fruit] }));
  };

  
  const getMoreDetails = async () => {
    if (!userInput) {
      alert("Please enter a question!");
      return;
    }

    try {
      const response = await genAI.generateContent(userInput);
      const generatedText = response.content;
      setGeneratedContent(generatedText);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div>
      <h1>Welcome to Fruit Flashcards!</h1>
      <div id="chat">
        <div id="greet">Hello! Click on a fruit flashcard to learn more about it. You can ask for further details as well!</div>
        <div className="flashcard-container">
          <Flashcard fruit="apple" flipped={flippedCards.apple} flipCard={flipCard} />
          <Flashcard fruit="banana" flipped={flippedCards.banana} flipCard={flipCard} />
          <Flashcard fruit="grape" flipped={flippedCards.grape} flipCard={flipCard} />
          <Flashcard fruit="orange" flipped={flippedCards.orange} flipCard={flipCard} />
          <Flashcard fruit="pineapple" flipped={flippedCards.pineapple} flipCard={flipCard} />
        </div>
        <input
          type="text"
          id="input-box"
          placeholder="Ask more about a fruit (e.g. 'Tell me more about Apple')"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button id="submit-btn" onClick={getMoreDetails}>
          Submit
        </button>
        <div id="generated-content">{generatedContent}</div>
      </div>
    </div>
  );
}

const Flashcard = ({ fruit, flipped, flipCard }) => {
  return (
    <div className="flashcard" onClick={() => flipCard(fruit)}>
      <div className="flashcard-inner">
        <div className={`flashcard-front ${flipped ? 'flipped' : ''}`}>{getFruitEmoji(fruit)} {fruit.charAt(0).toUpperCase() + fruit.slice(1)}</div>
        <div className={`flashcard-back ${flipped ? 'flipped' : ''}`} id={fruit}>
          {getFruitDescription(fruit)}
        </div>
      </div>
    </div>
  );
};

const getFruitEmoji = (fruit) => {
  switch (fruit) {
    case 'apple':
      return '🍎';
    case 'banana':
      return '🍌';
    case 'grape':
      return '🍇';
    case 'orange':
      return '🍊';
    case 'pineapple':
      return '🍍';
    default:
      return '';
  }
};

const getFruitDescription = (fruit) => {
  switch (fruit) {
    case 'apple':
      return 'Apple is a sweet fruit, high in fiber and Vitamin C.';
    case 'banana':
      return 'Bananas are rich in potassium and great for energy.';
    case 'grape':
      return 'Grapes are small, sweet, and high in antioxidants.';
    case 'orange':
      return 'Oranges are full of Vitamin C and great for immunity.';
    case 'pineapple':
      return 'Pineapples are tropical fruits with enzymes that aid digestion.';
    default:
      return '';
  }
};

export default FruitFlashcards;
