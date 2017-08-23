import React from 'react';
import Display from '../containers/Display';
import RegistForm from '../containers/RegistForm';
import './App.css';

import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        return (
            <div className='app'>
                <h1>RandomWordSelector</h1>
                <Display />
                <RegistForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isVisible: state.isVisible,
        words: state.words,
        inputWord: state.inputWord,
        selectedWord: state.selectedWord,
    }
}

export default connect(mapStateToProps)(App);