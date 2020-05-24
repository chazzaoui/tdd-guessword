import {actionTypes ,correctGuess} from './index';

describe('correctGuess', () => {
    test('should return an action with CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
    });
})