import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState('password');

     function handleFormSubmit(e) {
        e.preventDefault();
        console.log("Form Submit")
    }

    function handleTextChange(e) {
        console.log("Text Input Change"+e.target.value)
    }

    function handleBtnToggle() {
        console.log("Show Hide")
        console.log(inputType)
        if (inputType === 'password'){
            setInputType('text');
        } else {
            setInputType('password');
        }
    }

    return (
        <>
            <TextInputForm
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextChange={handleTextChange}
                handleBtnToggle={handleBtnToggle}
            />
        </>
    )
    
}
export default TextInputFormContainer;