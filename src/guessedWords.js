import React from "react";
import Proptypes from "prop-types";

const GuessedWords = (props) => {
  return (
    <div data-test={"component-guessed-words"}>
      {props.guessedWords && (
        <span data-test={"component-instructions"}>
          Try to guess the secret word!
        </span>
      )}
    </div>
  );
};

GuessedWords.proptypes = {
  guessedWords: Proptypes.arrayOf(
    Proptypes.shape({
      guessedWord: Proptypes.string.isRequired,
      letterMatchCount: Proptypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
