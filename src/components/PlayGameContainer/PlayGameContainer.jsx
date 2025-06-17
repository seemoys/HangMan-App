import { useState } from "react";
import { useLocation } from "react-router-dom";
import PlayGame from "../../pages/PlayGame";

function PlayGameContainer() {

    const location = useLocation();
    const { wordSelected,hint } = location.state;
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [step, setStep] = useState(0);
    const [isWordGuessed, setIsWordGuessed] = useState(false);

    function handleLetterClick(event) {
        setGuessedLetter([...guessedLetter, event.target.value]);
        if (wordSelected.toUpperCase().includes(event.target.value)) {
            const allGuessed = wordSelected.toUpperCase().split('').every((char) => guessedLetter.concat(event.target.value).includes(char));
            if (allGuessed) {
                setIsWordGuessed(true)
            }
            
        } else {
            setStep(step + 1);
        }
    }
    return (
        <PlayGame
            wordSelected={wordSelected}
            guessedLetter={guessedLetter}
            handleLetterClick={handleLetterClick}
            isWordGuessed={isWordGuessed}
            step={step}
            hint={hint}   
        />
        
    )
    
}
export default PlayGameContainer;