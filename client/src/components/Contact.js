import React from 'react';
import PageHeader from './PageHeader';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const handleUrl = (url) => (()=> window.open(url, "_blank"))
    return (
        <div className="contacts">
            <PageHeader title={"Contact-Me"}/>
            <div className="contactsIcons">
                <FaGithub 
                color="white" 
                size="3.5rem" 
                style={{padding:"1%"}}
                onClick={handleUrl("https://github.com/StefanoQuiroz")}
                />
                <FaLinkedin 
                color="white" 
                size="3.5rem" 
                style={{padding:"1%"}}
                onClick={handleUrl("https://www.linkedin.com/in/stefano-quiroz-597403210/")}
                />
            </div>    
        </div>
    );
}

export default Contact;
