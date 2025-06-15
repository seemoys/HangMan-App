import { useLocation } from "react-router-dom";

function PlayGame() {
    const location = useLocation();
    const { text } = location.state;

    return (
        <>
            <h1>Play Game - { text}</h1>
        </>
    )
    
}
export default PlayGame;