
export function getMaskedUtility(originalWord, guessedLetters) {
    
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());
    const guessedLetterSet = new Set(guessedLetters);
    const result = originalWord.toUpperCase().split('').map((char) => {
        if (guessedLetterSet.has(char)) {
            return char;
        } else {
            return "_"
        }
    })
    return result;
    
}