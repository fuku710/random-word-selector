const initialState = {

}

function selectedWord(state = initialState,action){
    switch(action.type){
        case 'SET':
            return action.selectedWord;
        default:
            return state;
    }
}

export default selectedWord;