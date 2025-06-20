const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
function LetterButtons({ text, guessedLetters, onLetterClick }) {
    
    const originalLetter = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const btnStyle = (letter) => {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetter.has(letter)?'bg-green-500':'bg-red-500'}`
        } else {
            return 'bg-blue-200';
        }
    }

    const button = ALPHABETS.map((letter) => {
        return (
            <button key={`btn${letter}`} onClick={onLetterClick} className={`${btnStyle(letter)} m-2 h-10 w-10 rounded-2xl`} value={letter} disabled={guessedLettersSet.has(letter)}>{ letter}</button>
        )
    })

    return (
        <>
            {button}
        </>
    )
    
}
export default LetterButtons;