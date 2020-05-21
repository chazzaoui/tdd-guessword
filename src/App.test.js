import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()});


test('renders without error', () => {
 const wrapper = shallow(<App /> );
 const appComponent = wrapper.find("[data-test='component-app']")
 expect(appComponent.length).toBe(1);
});

test('should render increment button', () => {
    
});

test('should render counter', () => {
    
})

test('counter should start at zero', () => {
    
})

test('should increment counter on click in display', () => {
    
})




