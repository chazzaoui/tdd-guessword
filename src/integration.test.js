import { storeFactory } from './utils/testUtil';
import {guessword} from './actions'

describe('Guess word action dispatcher', () => {
    const secretWord = 'party';
    const faultyGuess = 'train';
    describe('No guessed words', () => {
        let store;
        const initialState = {secretWord};
        beforeEach( ()=> {
            store = storeFactory(initialState);
        })
        test('should update state correctly for unsuccesfull guess', () => {
            store.dispatch(guessword(faultyGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords:[{
                    guessword : faultyGuess,
                    letterMatchCount : 3
                }]
            }
            expect(newState).toEqual(expectedState);
        });
        test('should update state correctly for succesfull guess', () => {
            
        });
    })
    describe('Some guessed words', () => {
        test('should update state correctly for unsuccesfull guess', () => {
            
        });
        test('should update state correctly for succesfull guess', () => {
            
        });
    })
})
