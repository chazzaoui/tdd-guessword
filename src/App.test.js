 import React from 'react';
 import Enzyme, {shallow} from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from "./utils/testUtil";
 import App from './App';


//Create shallow wrapper for the app component
const setup = (props={}, state=null ) => {
    return shallow(<App {...props}/> )
}

test('renders without error', () => {
 const wrapper = setup();
 const appComponent = findByTestAttr(wrapper,'component-app');
 expect(appComponent.length).toBe(1);
});

// test('should render increment button', () => {
//     const wrapper = setup();
//     const button = findByTestAtt(wrapper, 'counter-display');
//     expect(button.length).toBe(1);
// });

// test('should render counter', () => {
//     const wrapper = setup();
//     const counterDisplay = findByTestAtt(wrapper, 'increment-button');
//     expect(counterDisplay.length).toBe(1);
// })

// test('counter should start at zero', () => {
//    const wrapper = setup();
//    initialCounterState = wrapper.state('counter');
//    expect(initialCounterState).toBe(0)
// })

// test('should increment counter on click in display', () => {
   
// })




