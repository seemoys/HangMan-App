import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [word, setWord] = useState('');
    const [hint, setHint] = useState('');

    async function fetchWord(){
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        const randomIndex = Math.ceil(Math.random() * data.length)
        const randomWord = data[randomIndex];
        const word = randomWord.wordValue;
        const hint = randomWord.wordHint;
        setWord(word);
        setHint(hint)
    }

    useEffect(() => {
        fetchWord();
    },[])

    return (
        <>
            <Link to='/play' state={{wordSelected:word,hint:hint}}>
                <Button text='Single Player' styleType='primary' onClickHandler={()=>console.log("Click me Single")}/>
            </Link>
            <Button text='Multi Player' styleType='primary' onClickHandler={() => navigate('/start')} /> 
        </>
         
    )
}
export default Home;