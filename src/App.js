import React from "react";

import "./App.css";
import GuessedWords from "./guessedWords";
import Congrats from "./congrats";

function App() {
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
    {
      guessedWord: "house",
      letterMatchCount: 2,
    },
    {
      guessedWord: "travel",
      letterMatchCount: 4,
    },
  ];

  return (
    <div className="container">
      <h1>Jotto!</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
