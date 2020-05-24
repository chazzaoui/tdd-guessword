import React from "react";

import "./App.css";
import GuessedWords from "./guessedWords";
import Congrats from "./congrats";
import Input from './input';

function App() {
  const guessedWords = [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ];

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto!</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={guessedWords} />
      <Input />
    </div>
  );
}

export default App;
