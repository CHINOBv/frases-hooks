import React, { useState, useEffect } from 'react';

import axios from 'axios'

import SentenceC from './components/SentenceC';

function App() {

  const [Sentence, setSentence] = useState({});

  const consultAPI = async () => {
    const res = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  
    setSentence(res.data[0]);
  }
  console.log(Sentence);

  useEffect( () => {
    consultAPI();
  },[])

  return (
    <div className="contenedor">
      <SentenceC
        Sentence={Sentence}
      />
      <button
        onClick={consultAPI}
      >Generar Nueva</button>
    </div>
  );
}

export default App;
