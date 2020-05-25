import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux';


import rootReducer from '../reducers';
import { middleware } from '../configureStore';

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
    return createStoreWithMiddleware( rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`)
}

export const propTypeCheck = (component, conformingProps) => {
    const propErrors = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
    expect(propErrors).toBeUndefined();
}

