function words(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.word];
        default:
            return state;
    }
}

export default words;