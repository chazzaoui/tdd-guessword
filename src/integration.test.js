import { storeFactory } from './utils/testUtil';
import {guessWord} from './actions'

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
            store.dispatch(guessWord(faultyGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords:[{
                    guessedWord : faultyGuess,
                    letterMatchCount : 3
                }]
            }
            expect(newState).toEqual(expectedState);
        });
        test('should update state correctly for succesfull guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords:[{
                    guessedWord : secretWord,
                    letterMatchCount : 5
                }]
            }
            expect(newState).toEqual(expectedState);
        });
    })
    describe('Some guessed words', () => {
        let store;
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1}];
        const initialState = {guessedWords, secretWord}
        beforeEach( ()=> {
            store = storeFactory(initialState);
        })
        test('should update state correctly for unsuccesfull guesses', () => {
            store.dispatch(guessWord(faultyGuess));
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: faultyGuess, letterMatchCount: 3}]

            }
            expect(newState).toEqual(expectedState);
        });
        test('should update state correctly for succesfull guesses', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords:[...guessedWords, {
                    guessedWord : secretWord,
                    letterMatchCount : 5
                }]
            }
            expect(newState).toEqual(expectedState);
        });
    })
})
