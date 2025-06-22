import { Link } from 'react-router-dom';
import Level1 from '../../assets/images/1.svg';
import Level2 from '../../assets/images/2.svg';
import Level3 from '../../assets/images/3.svg';
import Level4 from '../../assets/images/4.svg';
import Level5 from '../../assets/images/5.svg';
import Level6 from '../../assets/images/6.svg';
import Level7 from '../../assets/images/7.svg';
import Level8 from '../../assets/images/8.svg';

function HangMan({ step, word }) {
    word = word.toUpperCase();
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];
    return (
       <>
            {step > 7 ?
                (<div style={{ position:'relative',top:'0',left:'0',right:'0',bottom:'0',background:'rgba(0.2, 0.2, 0.2, 0.2)', display:'flex',flexDirection:'column',alignItems:'center',color:'white',fontSize:'2em',borderRadius:'555px',width:'auto'}}>
                    <div className='text-rose-800  font-bold'>Sorry You Lose</div>
                    <div className='text-rose-800'>The Word Was "{word}"</div>
                    
                </div>)
                :
                (<div className='w-[300px] h-[200px] m-auto'>
                <img className='w-[300px] h-[200px] m-auto' src={step>=images.length? images[images.length-1]:images[step]} />
                </div>)}
            </>
    )
    
}

export default HangMan;