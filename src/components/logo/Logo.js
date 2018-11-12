import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
        <div className="Tilt-inner pa2 white f4">
        <img className="pa2" src={brain} alt='logo'/>Machine Learning</div>
        </Tilt>
        </div>
    );
}
export default Logo;



 
