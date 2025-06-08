import getBtnStyling from "./getBtnStyling";

function Button({ text, styleType, onClickHandler,type='button' }) {
    return (
        <>
            <button type={type} className={getBtnStyling(styleType)} onClick={onClickHandler}>{text}</button>
        </>
    )
}
export default Button;