import React from 'react';
import PageHeader from './PageHeader';
import javascriptTools from '../images/javascriptTools.svg'


const Skills = () => {
    const listBack = ["Back-end", "Express", "NodeJS"];
    const listFront = ["Front-end", "ReactJS-Aurelia", "Html-Css-Sass-Less", "MaterialUi-Bootstrap"];
    const dataBase = ["Server", "MongoDB", "Mongoose"];
    const other = ["Other", "Git-GitHub", "Jenkins", "Json"]

    const fullStack = [listBack, listFront, dataBase, other];

    const list = fullStack.map((items, index) => (
            <ul key={index}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
    ))
        
    

    return (
        <div className="skills" id="Skills"> 
            <PageHeader title={"My skills"}/>
            <p>I have a wide knowledge in front-end, back-end, server and other technologies as you can see below. All with the aim of ensuring the best user experience.</p>
            <div className="wrapperSkills">
                <img className="picJS" src={javascriptTools} alt="javascript-tools" />
                <div className="list">
                    {list}
                </div>
            </div>
        </div>
    )
}
export default Skills;
