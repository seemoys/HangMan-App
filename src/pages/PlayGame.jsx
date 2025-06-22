import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import ConfettiView from "../components/ConfettiView/ConfettiView";
import { Link } from "react-router-dom";
import { WordContext } from "../context/WordContext";

function PlayGame({ wordSelected, guessedLetter, handleLetterClick, isWordGuessed, step, hint }) {
  
  
   return (
     <>
        <div className="flex flex-col items-center justify-center text-center p-4 gap-1">
          <h1 className="text-base sm:text-sm md:text-2xl font-bold text-blue-600">
           🎮 Your Game Has Started!
          </h1>
          <h1 className="text-sm sm:text-base md:text-xl font-medium text-gray-700">
            💡 Hint: <span className="italic text-green-700">{hint}</span>
          </h1>
        </div>

        <div className="flex justify-center px-4 text-sm sm:text-base md:text-xl">
          <MaskedText text={wordSelected} guessedLetters={guessedLetter} />
        </div>

        <div className="w-full max-w-xl mx-auto px-4 mt-4 text-sm sm:text-base md:text-xl">
          <LetterButtons
            text={wordSelected}
            guessedLetters={guessedLetter}
            onLetterClick={handleLetterClick}
          />
        </div>

        {isWordGuessed ? (
          <ConfettiView show={isWordGuessed} />
        ) : (
          <div className="flex justify-center mt-4 px-4">
            <HangMan step={step} word={wordSelected} />
          </div>
        )}

        {!isWordGuessed && (
          <div className="flex justify-center mt-6">
            <Link
              to="/"
              className="px-4 py-2 bg-lime-700 text-white rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Home
            </Link>
          </div>
        )}
      </>
    );
    
  }
export default PlayGame;