import React, { useState } from 'react';
import './MoveImage.css'
import jerry from './assets/jerry.png';

function MoveImage() {
    const [position, setPosition] = useState({top: 0, left: 0});
    
    function handleMouseMove(event){
        event.preventDefault();

        if(isTouchDevice)
            document.getElementsByTagName("body")[0].style.backgroundColor="orange";
        else
            document.getElementsByTagName("body")[0].style.backgroundColor="brown";
        setPosition({
            top: Math.random() * (window.innerHeight - event.target.offsetHeight),
            left: Math.random() * (window.innerWidth - event.target.offsetWidth)
        });
    }

    function isTouchDevice(){
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch(e) {
            return false;
        }
    }
    function handleTouchMove(event){
        event.preventDefault();
        const touch = event.touches[0];
        
        document.getElementsByTagName("body")[0].innerText = touch;
        document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
        // setPosition({
        //     top: touch.clientY - event.target.offsetHeight / 2,
        //     left: touch.clientX - event.target.offsetWidth / 2
        // })
    }

    return (
        <img 
        src={jerry}
        alt="moving image"
        draggable="false"
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