import { useEffect, useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";
import CounterModal from "../CounterModal/CounterModal";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState('password');
    const [value, setValue] = useState('');
    const [hint, setHint] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

     function handleFormSubmit(e) {
        e.preventDefault();
         if (value) {
             setIsModalVisible(true);
             setCounter(1);
         } else {
             alert('Please Enter A Word Then Press Submit')
         }
    }
    function handleHintChange(e) {
        setHint(e.target.value);
    }


    function handleTextChange(e) {
        // console.log("Text Input Change" + e.target.value)
         setValue(e.target.value);
    }

    function handleBtnToggle() {
        if (!value) {
            alert('Please Enter A Word First.')
        } else {
            // console.log("Show Hide")
            // console.log(inputType)
            if (inputType === 'password'){
                setInputType('text');
            } else {
                setInputType('password');
            }
        }
    }

    useEffect(() => {
        console.log("sanu")
        let interval;
           if (isModalVisible && counter >0) {
               interval = setInterval(() => {
                   setCounter((prev) => {
                       return prev - 1;
                   })
               }, 1000);
           } else if (isModalVisible && counter===0) {
               navigate('/play', { state: {wordSelected:value,hint} });
           }
           return () => clearInterval(interval);
    }, [isModalVisible, counter, navigate, value, hint])
    
    

    return (
        <>
            <TextInputForm
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextChange={handleTextChange}
                handleHintChange={handleHintChange}
                handleBtnToggle={handleBtnToggle}
            />
            { (inputType=='password'?<Temp/>:null)}
            { isModalVisible &&(<CounterModal counter={counter}/>)}
        </> 
    )
    
}

export default TextInputFormContainer;