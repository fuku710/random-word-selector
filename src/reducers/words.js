const initialState = {
    words: ['aaa', 'bbb', 'ccc'],
}

function words(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.word];
        default:
            return state;
    }
}

export default words;