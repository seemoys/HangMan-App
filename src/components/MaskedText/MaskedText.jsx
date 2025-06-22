import { getMaskedUtility } from "./MaskedTextUtility";

function MaskedText({text,guessedLetters}) {
    const maskedString = getMaskedUtility(text, guessedLetters);
    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span className="font-bold text-emerald-500 text-4xl mx-2 text-center font-serif" key={index}>{ letter}</span>
                )
            })}
        </>
    )
    
}
export default MaskedText;