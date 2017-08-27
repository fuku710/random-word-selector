function selectedWord(state = 'ここに表示', action) {
    switch (action.type) {
        case 'SET':
            return action.selectedWord;
        default:
            return state;
    }
}

export default selectedWord;