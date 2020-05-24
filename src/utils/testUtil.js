import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux';


import rootReducer from '../reducers';

export const storeFactory = (initialState) => {
    return createStore( rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`)
}

export const propTypeCheck = (component, conformingProps) => {
    const propErrors = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
    expect(propErrors).toBeUndefined();
}

