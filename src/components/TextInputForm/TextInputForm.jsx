import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType,handleFormSubmit,handleTextChange,handleHintChange,handleBtnToggle}) {


    return(
    <>
        <form onSubmit={handleFormSubmit}>
            <div>
                    <TextInput type={inputType} label='Please Enter A Word' hint='Please Enter A Hint' onChangeHandler={handleTextChange} onHintChangeHandler={handleHintChange} />
            </div>
            <div className="flex space-x-4">
                <Button text={inputType==='text'?'Hide':'Show'} onClickHandler={handleBtnToggle}/>
                <Button text="Submit" styleType="success" type="submit" />
            </div>
        </form>
    </>
    )
}
export default TextInputForm;