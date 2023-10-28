import '../Styles/About.css'

function About() {
    return (
        <div className="AboutSec">
            <div className='wrapper'>
                <div className='About-container'>
                    <h1 className='About-header'>About Me</h1>
                    <p className='About-text'>I’m a 21 year old Australian/Iraqi, currently living in the northern suburbs of Perth, Western Australia.
                        My parents came to Australia in 1998 to escape the dangers in Iraq, leaving behind hundreds of family members, all so their children could grow up in a safe environment.
                        Because of this, I love to push myself everyday so that hopefully one-day i can repay them.
                    </p>
                </div>
                <div className='Hobbies-container'>
                    <h1 className='Hobbies-header'>Hobbies</h1>
                    <p className='Hobbies-text'>
                        Tech | Motorcycles | Combat-Sports | Programming | Cars | Camping | Fishing | Cooking
                    </p>
                </div>
                <div className='Education-container'>
                    <h1 className='Education-header'>My Software Journey</h1>
                    <p className='Education-text'>
                        I completed the UWA Full-Stack Software Development Bootcamp in Feb 2023. Now I code everyday!
                        My favourite part of software development is thinking of ambitious ideas and having no clue how to do it at first. But through determination to see my ideas come to fruition, i will eventually have my completed project. I continue to improve every week and now I even have a real client!
                    </p>
                    <p className='Education-text par-2'>
                        Now I would love to find an organisation to help me grow and become a better developer.
                        I am also hoping to got back to uni to study engineering in 2024</p>
                </div>
                
            </div>



        </div>
    );
}

export default About;