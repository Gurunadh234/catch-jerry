import React, { useState } from 'react';
import './MoveImage.css'
import jerry from './assets/jerry.png';

function MoveImage() {
    const [position, setPosition] = useState({top: 0, left: 0});
    
    function handleMouseMove(event){
        setPosition({
            top: Math.random() * (window.innerHeight - event.target.offsetHeight),
            left: Math.random() * (window.innerWidth - event.target.offsetWidth)
        });
    }

    return (
        <img 
        src={jerry}
        alt="moving image"
        onMouseOver={handleMouseMove}
        draggable="false"
        style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            transition: 'top 0.5s, left 0.5s',
        }}
        />
    );
}

export default MoveImage;