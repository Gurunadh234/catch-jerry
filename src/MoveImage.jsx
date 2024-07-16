import React, { useState } from 'react';
import './MoveImage.css'

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
        src='https://i.ytimg.com/vi/UjqShe7ZfQg/maxresdefault.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2Tdxd9ILCDVmfg-ANTp0rvtZ-Y0yicKqBA&shttps://m.media-amazon.com/images/I/41UECsJdp9L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg'
        alt="moving image"
        onMouseOver={handleMouseMove}
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