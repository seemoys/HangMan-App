import { getMaskedUtility } from "./MaskedTextUtility";

function MaskedText({text,guessedLetters}) {
    const maskedString = getMaskedUtility(text, guessedLetters);
    return (
        <>
            {maskedString.map((letter, index) => {
                return (
                    <span className="mx-2 text-center" key={index}>{ letter}</span>
                )
            })}
        </>
    )
    
}
export default MaskedText;