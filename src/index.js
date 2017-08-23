import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import reducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';



const initialState = {
    words:[],
    selectedWord:null,
}

let store = createStore(reducer,initialState);

var words = [
    'word1',
    'word2',
    'word3'
]

ReactDOM.render(
    <Provider store={store}>
        <App words={words} />
    </Provider>
    , document.getElementById('root')
)