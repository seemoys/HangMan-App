import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType,handleFormSubmit,handleTextChange,handleHintChange,handleBtnToggle}) {


    return(
    <>
        <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center h-screen space-x-4 bg-gray-900">
            <div>
                    <TextInput type={inputType} label='Please Enter A Word' hint='Please Enter A Hint' onChangeHandler={handleTextChange} onHintChangeHandler={handleHintChange} />
            </div>
            <div className="">
                <Button text={inputType==='text'?'Hide':'Show'} onClickHandler={handleBtnToggle}/>
                <Button text="Submit" styleType="success" type="submit" />
            </div>
        </form>
    </>
    )
}
export default TextInputForm;