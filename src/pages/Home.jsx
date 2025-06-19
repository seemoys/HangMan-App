import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Link to='/play' >
                <Button text='Single Player' styleType='primary' onClickHandler={()=>console.log("Click me Single")}/>
            </Link>
            <Button text='Multi Player' styleType='primary' onClickHandler={() => navigate('/start')} /> 
        </>
         
    )
}
export default Home;