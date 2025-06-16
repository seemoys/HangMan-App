import ReactConfetti from "react-confetti";
import { Link } from "react-router-dom";

function ConfettiView({ show }) {
    if (!show) return null;

    return (
        <>
            <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500}
            />
            <div style={{ 
                position:'fixed',
                top:'0',
                left:'0',
                right:'0',
                bottom:'0',
                background:'rgba(0, 0, 0, 0.5)', 
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-around',
                color:'white',
                fontSize:'2em',
                padding: '15rem'
            }}>
                <div>Congrats You Won</div>
                
                <Link 
                    to='/' 
                    style={{ color:'yellow', fontSize:'0.5em', marginBottom:'3px' }}
                >
                    Go back to Home
                </Link>
            </div>
        </>
    )
}

export default ConfettiView;
