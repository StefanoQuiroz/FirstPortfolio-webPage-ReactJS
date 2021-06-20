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
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ullam cumque, labore at nostrum, praesentium dicta nesciunt consequatur, sunt maiores possimus libero blanditiis reprehenderit beatae? Eos quaerat nemo quisquam voluptatibus laudantium, odio itaque tempora alias quos animi ipsum molestiae, corrupti repellendus. Earum ullam numquam beatae dignissimos, maiores commodi vitae voluptatibus sint suscipit vel a consectetur reprehenderit omnis quos illo quo?</p> 
                </div>
                <div className="photo">
                    <img className="personalPhoto" src={myPhoto} alt="myphoto" />
                </div>
            </div>
        </div>
    );
}

export default About;
