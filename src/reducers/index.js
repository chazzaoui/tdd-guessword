import {combineReducers} from 'redux';

import success from './succesReducer';
import guessedWords from './guessedWordsReducer';

export default combineReducers({
    success,
    guessedWords
}) 