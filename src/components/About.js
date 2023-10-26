import '../Styles/About.css'
import portrait from '../assets/sticker.png'
import left from '../assets/left_arrow.svg'
import right from '../assets/right_arrow.svg'
import up from '../assets/up_arrow.svg'
import down from '../assets/down_arrow.svg'

function About() {
    return (
        <div className="AboutSec">
            <div className='container' >
                <div className='portrait'>
                    <img src={portrait} alt='Portrait' className='image'></img>
                </div>
                <div className='text-container'>
                    <p>Hi! I’m Hashim</p>
                    <p>welcome to my Portfolio Website,</p>
                    <p>use the arrow keys to navigate!</p>
                    <div>
                        <div className='top_row'>
                            <img src={up} alt='upkey' className='key'></img>
                        </div>
                        <div className='bottom_row'>
                            <img src={left} alt='leftkey' className='key'></img>
                            <img src={down} alt='downkey' className='key'></img>
                            <img src={right} alt='rightkey' className='key'></img>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;