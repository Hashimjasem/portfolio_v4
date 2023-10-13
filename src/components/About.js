import '../Styles/About.css'
import portrait from '../assets/sticker.png'

function About() {
    return (
        <div className="AboutSec">
            <div className='container' >
                <div className='portrait'>
                    <img src={portrait} alt='Portrait' className='image'></img>
                </div>
                <div className='text-container'></div>
            </div>
        </div>
    );
}

export default About;