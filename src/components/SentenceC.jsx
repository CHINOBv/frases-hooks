import React from 'react'

const SentenceC = ({Sentence}) => {
  return (
    <div className="frase">
      <h1>{Sentence.quote}</h1>
      <p>-{Sentence.author}</p>
    </div>
  )
}

export default SentenceC
