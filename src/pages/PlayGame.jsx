import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import ConfettiView from "../components/ConfettiView/ConfettiView";

function PlayGame({ wordSelected,guessedLetter,handleLetterClick,isWordGuessed,step,hint}) {

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center p-6 gap-4">
                <h1 className="text-3xl font-bold text-blue-600">🎮 Your Game Has Started!</h1>
                <h1 className="text-xl font-medium text-gray-700">💡 Hint: <span className="italic text-green-700">{hint}</span></h1>
            </div>
                <MaskedText text={wordSelected} guessedLetters={guessedLetter} />

                <div className="mt-4">
                    <LetterButtons
                        text={wordSelected}
                        guessedLetters={guessedLetter}
                        onLetterClick={handleLetterClick}
                    />
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