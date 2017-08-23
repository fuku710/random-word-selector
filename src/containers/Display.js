import React from 'react';
import { connect } from 'react-redux';
import { setSelectedWord } from '../actions';


class Display extends React.Component {

    handleClick() {
        let selectedWord = selectWord(this.props.words);
        this.props.onClick(selectedWord);
    }

    render() {
        return (
            <div className='display'>
                <div className='display-word'>
                    {this.props.selectedWord}
                </div>
                <button
                    className='display-button'
                    onClick={() => this.handleClick()}>
                    ランダムに言葉を選択!
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        words: state.words,
        selectedWord: state.selectedWord,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick(word) {
            dispatch(setSelectedWord(word));
        },
    }
}

function selectWord(words) {
    let rnd = Math.floor(Math.random() * words.length);
    console.log(rnd)
    return words[rnd];
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);