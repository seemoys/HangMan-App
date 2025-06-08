import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType,handleFormSubmit,handleTextChange,handleBtnToggle}) {


    return(
    <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput type={inputType} label='Please Enter A Word' onChangeHandler={handleTextChange}/>
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