import ReactConfetti from "react-confetti";
import { Link } from "react-router-dom";

function ConfettiView({ show }) {
    if (!show) return null;

    return (
        <>
            <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={1000}
            />
            <div style={{ position:'fixed',top:'0',left:'0',right:'0',bottom:'0',background:'rgba(0, 0, 0, 0.5)', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',color:'white',fontSize:'2em',paddingTop: "8rem",}}>
                <div style={{paddingTop: "8rem",}}>Congrats You Won</div>
                <Link to='/' style={{ color:'yellow', fontSize:'0.5em', paddingTop: "0rem" }}
                >Go back to Home</Link>
            </div>
        </>
    )
}

export default ConfettiView;
