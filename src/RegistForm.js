import React from 'react';
import WordList from './WordList.js';

import {addWord,changeInputWord} from './actions';

import { connect } from 'react-redux';

class RegistForm extends React.Component {
    handleClick(){
        const word = this.inputWord.value;
        this.props.onClick(word);
        this.inputWord.value = '';
    }
    render() {

        /*
        if (!this.props.isVisible) {
            return null;
        }
        */

        return (
            <form className='regist-form'>
                <input
                    className='regist-input'
                    type='text'
                    value={this.props.inputWord}
                    ref={(input) => this.inputWord = input}
                    onChange={(e) => this.props.onChange(e)}
                />
                <button
                    className='regist-button'
                    type='button'
                    onClick={() => this.handleClick()}>
                    登録
                </button>
                <WordList
                    className='regist-wordlist'
                />
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        isVisible:state.isVisible,
        words: state.words,
        inputWord:state.inputWord,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick(word) {
            dispatch(addWord(word));
        },
        onChange(inputValue){
            dispatch(changeInputWord(inputValue));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistForm);