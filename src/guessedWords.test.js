import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, propTypeCheck } from "./utils/testUtil";
import GuessedWords from "./guessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("should not throw warning with expected props", () => {
  propTypeCheck(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("should render without error ", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("should render instructions", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
    let wrapper;
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
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
test("should render without error ", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
});
  test("should render guessedword component", () => {
      const guessedWordsNode = findByTestAttr(wrapper, "guessedWords");
      expect(guessedWordsNode.length).toBe(1)
  });

  test("correct number of guessed words", () => {
    const guessedWordsNodes = findByTestAttr(wrapper, "guessedWord");
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  });
});
