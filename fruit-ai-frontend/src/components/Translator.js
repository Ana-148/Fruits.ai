// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Translator() {
//   const [inputText, setInputText] = useState("");
//   const [resultText, setResultText] = useState("");
//   const [selectedLanguageKey, setLanguageKey] = useState("");
//   const [languagesList, setLanguagesList] = useState([]);
//   const [detectLanguageKey, setDetectedLanguageKey] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Existing LibreTranslate code
//     axios
//       .get(`https://libretranslate.de/languages`)
//       .then((response) => {
//         setLanguagesList(response.data);
//       })
//       .catch((error) => {
//         setError("Error loading languages: " + error.message);
//       });

//     // Google Translate integration
//     const addScript = document.createElement('script');
//     addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     document.body.appendChild(addScript);
//     window.googleTranslateElementInit = function () {
//       new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
//     };
//   }, []);

//   useEffect(() => {
//     const getLanguageSource = () => {
//       axios
//         .post(`https://libretranslate.de/detect`, {
//           q: inputText,
//         })
//         .then((response) => {
//           setDetectedLanguageKey(response.data[0].language);
//         })
//         .catch((error) => {
//           setError("Error detecting language: " + error.message);
//         });
//     };

//     getLanguageSource();
//   }, [inputText]);

//   const translateText = () => {
//     let data = {
//       q: inputText,
//       source: detectLanguageKey,
//       target: selectedLanguageKey,
//     };
//     axios
//       .post(`https://libretranslate.de/translate`, data)
//       .then((response) => {
//         setResultText(response.data.translatedText);
//       })
//       .catch((error) => {
//         setError("Error translating text: " + error.message);
//       });
//   };

//   const languageKey = (selectedLanguage) => {
//     setLanguageKey(selectedLanguage.target.value);
//   };

//   return (
//     <div>
//       <h2>Text-Translator</h2>
//       <div>
//         <textarea
//           placeholder="Type Text to Translate.."
//           onChange={(e) => setInputText(e.target.value)}
//           style={{ height: "200px", width: "400px", margin: "5px" }}
//         />
//         <textarea
//           placeholder="Translation"
//           style={{ height: "200px", width: "400px", margin: "5px" }}
//           value={resultText}
//           readOnly
//         />
//       </div>
//       <br />
//       <select onChange={languageKey}>
//         <option>Please Select Language..</option>
//         {languagesList.map((language, index) => (
//           <option key={index} value={language.code}>
//             {language.name}
//           </option>
//         ))}
//       </select>
//       <button onClick={translateText}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           fill="currentColor"
//           className="bi bi-translate"
//           viewBox="0 0 16 16"
//         >
//           <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
//           <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
//         </svg>
//         &nbsp;Translate with LibreTranslate
//       </button>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <br />
//       <div>
//         <h4>Or use Google Translate:</h4>
//         <div id="google_translate_element"></div>
//       </div>
//     </div>
//   );
// }

// export default Translator;
import React from 'react'

const button = document.createElement('button');
button.textContent = 'Click me!';
button.onclick = function() {
  window.location.href = 'https://translate.google.co.in/?sl=auto&tl=en&op=translate'; // Replace with your desired link
};

function Translator() {
  return (
    <div>
    <div>Translator Page</div>
    <button>Translate</button>
    </div>
  )
}

export default Translator
