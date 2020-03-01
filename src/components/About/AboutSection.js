import React, { Component } from 'react';
import headshot from '../../images/headshot.jpg'
import './AboutSection.scss'
class AboutSection extends Component {
    render () {
        return (
            <section className="wrapper special">
                <div className="inner"> 
                <div className="headshot">
                <img src={headshot}/>
                </div>
                <h3>About me</h3>
                <p>
                I am a UCI 2018 graduate and has been in the software industry as a full stack devloper for over 3 years. I have fulfilled many successful roles within my current and previous companies, from large multi-team projects to smaller projects, where I’m equally successful designing and developing in an independent capacity. Some of my responsibility has include mentoring new engineers, designing new features for existing infrastructure in a test-driven environment or helping support multiple projects across teams.				
                Outside of my work, I love to latin dance and travel for snowboarding.
                </p>
                </div>
            </section>


        );
    }
}

export default AboutSection