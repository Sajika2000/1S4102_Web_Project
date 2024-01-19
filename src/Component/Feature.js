import React from 'react'
import "./Feature.css"
import Fea_1 from "../Assest/Home_icon1.png"
import Fea_2 from "../Assest/Home_icon2.png"
import Fea_3 from "../Assest/Home_icon3.png"

const Feature = () => {
  return (
    <div className='container'>
        <div className='feature'>
            <div className='subfeature'>
                <div className='icon'>
                   <img src={Fea_1} alt='Fea_1'/> 
                </div>
                <div className='text'>
                    <h4>Progress Tracking and Certifications</h4>
                    <p>Provide fratures to track users progress, such as completion percentage, module-wise performance achievements.</p>
                </div>

            </div>
            <div className='subfeature'>
                <div className='icon'>
                   <img src={Fea_2} alt='Fea_2'/> 
                </div>
                <div className='text'>
                    <h4>Diverse Course Selection</h4>
                    <p>Offer a vastrange of subjects and topics to choose from, allowing users to explore their interests, acquire new skills.
                    </p>
                </div>

            </div>

        </div>
        <div className='feature'>
        <div className='subfeature'>
                <div className='icon'>
                   <img src={Fea_3} alt='Fea_3'/> 
                </div>
                <div className='text'>
                    <h4>Accessibility and Convenience </h4>
                    <p>Provide the flexibility to learn anytime, anywhere, making education accessible to a wider audience.</p>
                </div>

            </div>
            <div className='subfeature'>
                <div className='icon'>
                   <img src={Fea_3} alt='Fea_3'/> 
                </div>
                <div className='text'>
                    <h4>Interactive Learning Experience</h4>
                    <p>Interactive elements like quizzes, exercise, and discu-ssion forums, and echancing the learning experince.</p>
                </div>

            </div>

        </div>
        

    </div>
  )
}

export default Feature