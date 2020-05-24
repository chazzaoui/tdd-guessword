import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "./utils/testUtil";
import Input from './input';

const setup = (initialState={}) =>{
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;

  beforeEach(() => {
      const initialState = {success: false}
    wrapper = setup(initialState);
  });
        test('should render component without error ', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect (component.length).toBe(1)
        });

        test('should render input box ', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect (inputBox.length).toBe(1)
        });
        test('should render submit button ', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect (submitButton.length).toBe(1)
        });
    });

    describe('word has been guessed', () => {
        test('should render component without error ', () => {
            
        });

        test('should not render input box ', () => {
            
        });
        test('should not render submit button ', () => {
            
        });
    })
});

describe('updateState', () => {
    
})
