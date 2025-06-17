import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import ConfettiView from "../components/ConfettiView/ConfettiView";

function PlayGame({ wordSelected,guessedLetter,handleLetterClick,isWordGuessed,step,hint}) {

    return (
        <>
            <h1>Play Game</h1>
            <h1>Hint is - { hint}</h1>
            <MaskedText text={wordSelected} guessedLetters={guessedLetter} />
            <div>
                <LetterButtons text={wordSelected} guessedLetters={guessedLetter} onLetterClick={handleLetterClick}/>
            </div>
            {isWordGuessed ?
                <div>
                    <ConfettiView show={isWordGuessed} />
                </div>
                    :
                <div>
                    <HangMan step={step} word={wordSelected}/>
                </div>
            }    
        </>
    )
    
}
export default PlayGame;