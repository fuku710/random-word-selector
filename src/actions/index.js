export function addWord(word){
    return{
        type:'ADD',
        word:word,
    }
}

export function changeInputWord(inputWord){
    return{
        type:'CHANGE',
        inputWord:inputWord,
    }
}

export function setSelectedWord(selectedWord){
    return{
        type:'SET',
        selectedWord:selectedWord,
    }
}