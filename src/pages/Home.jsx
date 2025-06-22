import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect } from "react";
import { WordContext } from "../context/WordContext";

function Home() {
    const navigate = useNavigate();
    // const [word, setWord] = useState(''); // Moved to App.jsx for Storage in Context
    // const [hint, setHint] = useState('');// Moved to App.jsx for Storage in Context

    const {setWordList, setWord, setHint} = useContext(WordContext);

    // For Express with my_bd Server
    //     async function fetchWord() {
    //     const response = await fetch('http://localhost:3001/words');
    //     const data = await response.json();
    //     const randomWord = data[0]; // because it's an array with 1 item
    //     setWord(randomWord.wordValue);
    //     setHint(randomWord.wordHint);
    // }


    async function fetchWord() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        setWordList([...data]);
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomWord = data[randomIndex];
        setWord(randomWord.wordValue);
        setHint(randomWord.wordHint);
    }

    useEffect(() => {
        fetchWord();
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen space-y-4 md:space-y-0 md:space-x-4 bg-gray-900 px-4">
            {/* <Link to='/play' state={{ wordSelected: word, hint: hint }}> Now Sending Dirext from Context */ }
            <Link to='/play'>
                <Button
                text='Single Player'
                styleType='primary'
                onClickHandler={() => console.log("Click me Single")}
                />
            </Link>
            <Button
                text='Multi Player'
                styleType='primary'
                onClickHandler={() => navigate('/start')}
            />
        </div>
    );
    }

export default Home;
