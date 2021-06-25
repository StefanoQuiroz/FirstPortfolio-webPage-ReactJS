import React from 'react';
import PageHeader from './PageHeader';
import myPhoto from '../images/myPhoto1.jpg';
const About = () => {
    return (
        <div className="about" id="About-me">
            <PageHeader title={"About Me"}/>
            <div className="wrapperAbout">
                <div className="text">
                   <h2>Hello, my name is Stefano</h2>
                   <p>I am a full stack developer passionate about Java Script and its frameworks for creating super cool web sites. Web development has been my passion since I took the Coding Dojo bootcamp with MERN stack specialization. And since then I like to innovate in both front-end and back-end technologies. And I'm fluent in Spanish, Brazilian Portuguese (advanced level) and English (intermediate level). For those who want to realize their ideas through a web site.</p> 
                </div>
                <div className="photo">
                    <img className="personalPhoto" src={myPhoto} alt="myphoto" />
                </div>
            </div>
        </div>
    );
}

export default About;
