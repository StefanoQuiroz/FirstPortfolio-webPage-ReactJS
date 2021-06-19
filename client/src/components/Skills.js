import React from 'react';
import PageHeader from './PageHeader';
import javascriptTools from '../images/javascriptTools.svg'


const Skills = () => {
    const listBack = ["Back-end", "Express", "NodeJS"];
    const listFront = ["Front-end", "ReactJS", "Html", "Css", "Sass", "Less", "Aurelia", "Material-ui", "Bootstrap", "FramerMotion"];
    const dataBase = ["MongoDB", "Mongoose"];
    
    return (
        <div className="skills">
            <PageHeader title={"My skills"}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo architecto nulla. Nihil eligendi consequuntur quia, suscipit accusamus quaerat cumque non perspiciatis aut, adipisci officia dolore, at ab! Voluptas molestias impedit pariatur voluptatem doloribus illum aliquid nihil eveniet molestiae quis temporibus mollitia libero non et, ducimus iste inventore praesentium amet, nesciunt esse officiis. Quis commodi exercitationem placeat pariatur sequi ipsum dignissimos hic esse molestiae voluptate.</p>
            <div className="wrapperSkills">
                <div className="picSkills">
                    <img className="picJS" src={javascriptTools} alt="javascript-tools" />
                </div>
            </div>
        </div>
    )
}

export default Skills;
