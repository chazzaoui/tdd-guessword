import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './congrats';
import { findByTestAttr } from './utils/testUtil';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = (props={}) => {
         return shallow(<Congrats {...props}/> )
     }

test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
})

test('should render no text when succes prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
})

test('should renders non empty congrats when succes prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
})


