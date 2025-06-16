// import { useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
// import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import ConfettiView from "../components/ConfettiView/ConfettiView";

function PlayGame({ wordSelected,guessedLetter,handleLetterClick,isWordGuessed,step}) {

    return (
        <>
            <h1 >Play Game - {wordSelected}</h1>
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
                    <HangMan step={step} />
                </div>
            }    
        </>
    )
    
}
export default PlayGame;