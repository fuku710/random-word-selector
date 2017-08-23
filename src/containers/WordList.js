import React from 'react';
import { connect } from 'react-redux';

function WordList(props) {
    if (!props.words) {
        return null;
    }
    return (
        <ol className='wordlist'>
            {props.words.map((e, i) => {
                return <li key={i}>{e}</li>
            })}
        </ol>
    )
}

function mapStateToProps(state) {
    return {
        words: state.words,
    }
}

export default connect(mapStateToProps)(WordList);