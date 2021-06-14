import React from 'react'
import p1 from "./images/p1.jpg";


function Frame2() {
    return (
        
        <>
        <style>
            {`
            .frame-img{position: absolute;
                width: 700px;
                height: 300px;
                left: 8px;
                top: 10px;
                border-radius: 20px;}
            `}
        </style>
 
    <img
      className="frame-img"
      src={p1}
      alt="First slide"
    />
    
   
            
        </>
    )
}

export default Frame2
