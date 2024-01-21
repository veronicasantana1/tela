import React from "react";
import './Safe.css'
import SafeImage from './img/safe 1.png'

const Safe = () => {
    return(
       <div className="Safe">
        <img src={SafeImage}/>
        <p>Faça o Check-up de privacidade</p>
       </div> 
    )
}

export default Safe 