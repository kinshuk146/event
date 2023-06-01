import React from 'react'
import './HowItWorks.css'
import  Container  from '@mui/material/Container';
import HowItWorksBox from '../../components/HowItWorksBox/HowItWorksBox';

import Contest from '../../assets/Contest.jpg';
import Hackathon from '../../assets/Hackathon.jpg';
import Seminar from '../../assets/Seminar.jpg';
import upcoming from '../../assets/upcoming.jpg';
function HowItWorks() {
    return (
        <div >
            <Container>
            <div className='HowItWorks'>
               </div>
            <div className="HowItWorksBoxes">
            <HowItWorksBox number="Upcoming" image={upcoming } content="" position="left" title=""  bullets={['Workshop: Mastering Python for Data Science','Hackathon: Building Innovative Web Solutions','Exploring Blockchain Technology']} description="We are thrilled to announce an upcoming series of events hosted by our esteemed coding institute, designed to empower and inspire coding enthusiasts at all levels. With a focus on fostering knowledge, collaboration, and innovation"/>
            <HowItWorksBox number="Hackathons" image={Hackathon} position="right" paragraph="" title="" description="We feature a well-defined theme or problem statement, fostering collaboration and multidisciplinary problem-solving within diverse teams." bullets={['Access to cutting-edge tools, platforms, and resources','Experienced mentors offering guidance and technical expertise','Breakout sessions and workshops for skill enhancement']}/>
            <HowItWorksBox number="Contests" content="" image={Contest} position="left" heading="Creative" paragraph="" title="" description="Engaging and challenging contests to foster learning, encourage creativity, and provide opportunities for participants to showcase their coding skills" bullets={['contests involve solving algorithmic puzzles, coding problems, or logic-based challenges within a specified time limit','Codeathons','AI/ML Challenges']} />
            <HowItWorksBox number="Seminars" image={Seminar} position="right" paragraph="" title="" bullets={['Interactive discussions and Q&A sessions create an engaging learning environment','Participants gain insights into the latest advancements, tools, and frameworks','participants have opportunities to network with fellow attendees and engage with Frienducation community']} description="We feature a well-defined theme or problem statement, fostering collaboration and multidisciplinary problem-solving within diverse teams."/>
            </div>
            

            </Container>
        </div>
    )
}

export default HowItWorks
