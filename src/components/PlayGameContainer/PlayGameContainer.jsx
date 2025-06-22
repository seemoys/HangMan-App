// import { useContext, useState } from "react";
import { useState } from "react";
import { Navigate} from "react-router-dom";
import PlayGame from "../../pages/PlayGame";
import { WordContext } from "../../context/WordContext";
import useWordStore from "../../store/WordStore";

function PlayGameContainer() {

    // const location = useLocation();
    // const wordSelected = location.state?.wordSelected;
    // const hint = location.state?.hint;
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [step, setStep] = useState(0);
    const [isWordGuessed, setIsWordGuessed] = useState(false);
    // const {word,hint } = useContext(WordContext);
    const { word, hint } = useWordStore(); //Zustand Store

     if (!word) {
        alert('Not Getting Word, Error on Network Request')
        return <Navigate to="/" replace />;
    }

    function handleLetterClick(event) {
        setGuessedLetter([...guessedLetter, event.target.value]);
        if (word.toUpperCase().includes(event.target.value)) {
            const allGuessed = word.toUpperCase().split('').every((char) => guessedLetter.concat(event.target.value).includes(char));
            if (allGuessed) {
                setIsWordGuessed(true)
            }
            
        } else {
            setStep(step + 1);
        }
    }
    return (
        <PlayGame
            wordSelected={word}
            guessedLetter={guessedLetter}
            handleLetterClick={handleLetterClick}
            isWordGuessed={isWordGuessed}
            step={step}
            hint={hint}   
        />
        
    )
    
}
export default PlayGameContainer;