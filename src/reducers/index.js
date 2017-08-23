import words from './words';
import selectedWord from './selectedWord';

import { combineReducers } from 'redux';

const main = combineReducers({
    words,
    selectedWord,
});

export default main;
