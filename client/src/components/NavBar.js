import React from 'react';

const NavBar = () => {
    
    const list = ["Home", "About-me", "Skills", "Projects", "Contact"];
    const item = list.map((items, index)=> (<li key={index}><a href={"/#"+items}>{items}</a></li>) );
    
    return (
        <div className="navBar">
            <nav>
                <ul>
                    {item}
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
