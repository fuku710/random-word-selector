import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducers';
import './index.css';

let store = createStore(reducer);

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