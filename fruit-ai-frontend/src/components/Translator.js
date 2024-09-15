import React from 'react';

function Translator() {
  return (
    <div>
      <div>Translator Page</div>
      <button onClick={() => window.open('https://translate.google.co.in/?sl=auto&tl=en&op=translate', '_blank')}>
        Translate 
      </button>
    </div>
  );
}

export default Translator;
