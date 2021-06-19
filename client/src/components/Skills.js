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
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
    ))
        
    

    return (
        <div className="skills">
            <PageHeader title={"My skills"}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo architecto nulla. Nihil eligendi consequuntur quia, suscipit accusamus quaerat cumque non perspiciatis aut, adipisci officia dolore, at ab! Voluptas molestias impedit pariatur voluptatem doloribus illum aliquid nihil eveniet molestiae quis temporibus mollitia libero non et, ducimus iste inventore praesentium amet, nesciunt esse officiis. Quis commodi exercitationem placeat pariatur sequi ipsum dignissimos hic esse molestiae voluptate.</p>
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
