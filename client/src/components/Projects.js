import React from 'react';
import PageHeader from './PageHeader';
import github1 from '../images/github1.gif';
import github2 from '../images/github2.gif';
import covery from '../images/cover.jpg';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const descriptionGitHub1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga provident error adipisci doloremque quos nihil corporis. Reiciendis, dolores facilis vitae maxime enim sequi nulla?"

    const descriptionGitHub2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eius totam enim fugit dolores, maiores, numquam quod corrupti voluptas aperiam vitae illum eveniet autem quis!"
    
    const pHandler = (url) => (
        <div className="logoGit" onClick={e => window.open(url, "_blank").focus}
        >           
            <FaGithub 
                color="white" 
                size="3.5rem" 
                style={{padding:"1%"}}
            />
        </div>
    )
    const projectList = (url, img, description) => (
        <div className="projectListWrapper">
            <div className="github">
                <img src={img} alt="img" />
            </div>
            <div className="projectListText">
                <div>
                    {/* {description} */}
                    {pHandler(url)}
                </div>
                
            </div>
        </div>
    );
    return (
        <div className="projects" id="Projects">
            <img className="covery" src={covery} alt="covery" />
            <PageHeader title={"My Projects available"}/>
            <div className="wrapperProjects">
                <div className="projectText">
                    <p>
                    Here you can see some of my projects that I have been doing since I started the bootcamp. Taking as reference projects and then modifying them and adding different functionalities giving them a personal touch.
                    </p>
                </div>
                <div className="listProjects">
                    {projectList("https://github.com/StefanoQuiroz/MERN-APP-WORLDMAP", github1, descriptionGitHub1)}
                    {projectList("https://github.com/StefanoQuiroz/MERN-APP-IMAGE-EDITOR", github2, descriptionGitHub2)}
                </div>
            </div>
        </div>
    );
}

export default Projects;
