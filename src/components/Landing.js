import '../Styles/Landing.css'
import portrait from '../assets/sticker.png'
import left from '../assets/left_arrow.svg'
import right from '../assets/right_arrow.svg'
import up from '../assets/up_arrow.svg'
import down from '../assets/down_arrow.svg'

function Landing() {
    return (
        <div className="LandingSec">
            <div className='container' >

                <div className='landing-left'>
                    <img src={portrait} alt='Portrait' className='image'></img>
                </div>

                <div className='landing-right'>
                    <div className='text-wrapper'>
                        <p>Hi! I’m Hashim</p>
                        <p>welcome to my Portfolio Website,</p>
                        <p>use the arrow keys to navigate!</p>
                    </div>

                    <div className='arrow-wrapper'>
                        <img src={up} alt='upkey' className='key upkey'></img>

                        <img src={left} alt='leftkey' className='key leftkey'></img>
                        <img src={down} alt='downkey' className='key downkey'></img>
                        <img src={right} alt='rightkey' className='key rightkey'></img>



                    </div>
                </div>

            </div>
        </div>
    );
}

export default Landing;