import React from "react";
import Proptypes from "prop-types";

const GuessedWords = (props) => {
  return (
    <div data-test="component-guessed-words">
      {!props.guessedWords ? 
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
       : 
        <div data-test="guessedWords">
            <h3>Guessed words</h3>
          <table className="table table-sm">
            <thead className='thead-light'>
                <tr>
                    <th>Guess</th>
                    <th>Matching letters</th>
                </tr>
            </thead>
            <tbody>
                {props.guessedWords.map((word, index) => {
                    return (
                    <tr data-test="guessedWord" key={index}>
                        <td>{word.guessedWord}</td>
                        <td>{word.letterMatchCount}</td>
                    </tr>
                )})}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: Proptypes.arrayOf(
    Proptypes.shape({
      guessedWord: Proptypes.string.isRequired,
      letterMatchCount: Proptypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
