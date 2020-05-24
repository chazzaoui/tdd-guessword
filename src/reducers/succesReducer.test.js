import { actionTypes } from '../actions/index';
import succesReducer from './succesReducer'

test('should return default state of false when no correct action is passed ', () => {
    const newState = succesReducer(undefined, {}); //when reducers make a siwtch, makes sure tests pass in a object
    expect(newState).toBe(false);
});

test('should return true when correct action is passed', () => {
    const newState = succesReducer(undefined, {type:actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
});