import React from "react";
import { Modal } from "react-bootstrap";
import Frame2 from "./Frame2";


function Result2(props) {
  return (
    <>
    <style>
      {`
        .modal {
          position: fixed;
          top: -90px;
          left: 220px;}
          @media only screen and (max-width: 600px) {.modal{top: 0px;
            left: 0px;}}
          .modal-content{
            background-color: #18121A;
            border-radius: 15px;
            color:white;
            position: absolute;


          
          }
        
      `}
    </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable={true}>
          
          <Frame2/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Result2;
