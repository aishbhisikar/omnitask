import React from "react";
import Result from "./Result";

function MainFrame() {
  return (
    <>
      <style type="text/css">
        {`
        .home
        {
         display: flex;
         align-items: center;
         justify-content: center;
        height: 100vh; 
        background: #2D232B;
       }
      
       
       .box {
         max-height:670px;
         overflow-y:scroll;
        align-items: center;
        justify-content: center;
        background-color: #1C191D;
        border-radius: 15px;
        color:white;
        position: absolute;
        left: 550px;
        top: 99px;
        
       }
       @media only screen and (max-width: 600px) {
         .box{left:0px;width:100%;height:100%}
        }

       #style-1::-webkit-scrollbar-track
          {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #555;
          }

      #style-1::-webkit-scrollbar
      {
        width: 10px;
        background-color: #555;
      }

        #style-1::-webkit-scrollbar-thumb
        {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          background-color: #f5f5f5;
        }
         
       .box p{
        
        width: 193px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 29px;
       }
`}
      </style>
      <div className="home">
        <div className="box  scrollbar" id="style-1">
          <p style={{ marginLeft: "15px", marginTop: "10px" }}>
            {" "}
            15 Search Results
          </p>
          <Result />
          <Result />
          <Result />
        </div>
      </div>
    </>
  );
}

export default MainFrame;
