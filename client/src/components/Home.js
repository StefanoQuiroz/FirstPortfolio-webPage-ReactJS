import React from 'react';
import code from '../images/code.svg';
import binary from '../images/binary.svg';

const Home = () => {
    return (
        <div className="home" id="Home">
            <div className="wrapperHome">
                <h1>Hello everyone!!</h1>
                <h1>Welcome to my Personal Portfolio</h1>
                <img className="codeImg" src={code} alt="code-symbol" />
                <img className="binaryImg" src={binary} alt="world" />
            </div>
        </div>
    );
}

export default Home;
