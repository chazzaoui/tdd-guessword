import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, propTypeCheck } from "./utils/testUtil";
import GuessedWords from "./guessedWords";

const defaultProps = 
  {
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

describe('if there are no words guessed', () => {
    let wrapper;

    beforeEach( () => {
     wrapper = setup({ guessedWords: []});
    })
test('should render without error ', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1)
    });
test('should render instructions', () => {
    const instructions = findByTestAttr(wrapper, 'component-instructions');
    expect(instructions.text().length).not.toBe(0)
    });
});

describe('if there are words guessed', () => {
    
})