import '../Styles/Education.css'

function Education() {
    return (
        <div className="EducationSec">
            <div className='wrapper'>
                <h1>Skills & Education</h1>
                <div className='se-container'>

                    <div className='education-container'>
                        <h2>Education</h2>
                        <div className='card-container'>
                            <h3>Completed</h3>
                            <div className='completed-container'>

                                <div className='course-card'>
                                    <h4 className='title'>
                                        Full-Stack Bootcamp  - UWA/edX
                                    </h4>
                                    <h4 className='duration'> 24 Weeks</h4>
                                    <h5 className='completion-date'>completed : 08/02/2023</h5>
                                </div>

                                <div className='course-card'>
                                    <h4 className='title'>
                                        UI/UX Google -  Coursera
                                    </h4>
                                    <h4 className='duration'>Self Paced</h4>
                                    <h5 className='completion-date'>completed : 01/11/2023</h5>
                                </div>
                                <div className='blank-card'>
                                </div>

                            </div>

                            <h3>In-Progress</h3>
                            <div className='incompleted-container'>
                                <div className='course-card'>
                                    <h4 className='title'>
                                        Ruby on Rails - ODIN Project
                                    </h4>
                                    <h4 className='duration'>Self Paced</h4>
                                    <h5 className='completion-date'>expected completion : 01/12/2023</h5>
                                </div>
                                <div className='blank-card'>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* <div className='tools-container'>
                        <h2>Languages & Technologies I've Used</h2>
                        <div className='tech-grid'>
                            items
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Education;