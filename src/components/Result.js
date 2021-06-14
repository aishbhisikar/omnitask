import React,{useState} from "react";
import p1 from "./images/p1.jpg";
import { Card } from "react-bootstrap";
import { BiBed } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { GiSofa, GiPerson, GiAnticlockwiseRotation } from "react-icons/gi";
import Result2 from "./Result2";

function Result() {
 
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <style>
        {`
            .card{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 20px 10px 10px;
position: static;
width: 750px;
height: 228px;
left: 15px;
top: 15px;
background: #18121A;
border-radius: 15px;
flex: none;
order: 0;
flex-grow: 0;
margin: 30px 30px;
            }
            .card-horizontal {
                display: flex;
                flex-direction: column;
                flex: 1 1 auto;
              }
              .img-class{
                width:338px;
                height:200px;
                border-radius: 20px;
              }
              @media only screen and (max-width: 600px) {
                .card {flex-direction: column;width: 350px;
                  height: 450px;margin:10px 0px;}
                  .img-class{
                    width:250px;
                     
                  }
                 
            `}
      </style>
      <Card  onClick={() => setModalShow(true)}>
        <Card.Img className="img-class" src={p1} />
        <Card.Body className="card-horizontal">
          <Card.Title
            style={{
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "23.44px",
            }}
          >
            3 Bedroom flat in Hackney Bridge
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "21px",
              fontWeight: "900",
              lineHeight: "36.95px",
            }}
          >
            £1,420 pcm
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "18.75px",
            }}
          >
            <BiBed color="grey" /> 3 <GiSofa color="grey" /> 1{" "}
            <GiPerson color="#18121A" /> 2
            <h6
              style={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "10px",
                margin: "20px 0px",
              }}
            >
              <GiAnticlockwiseRotation /> South Kensington (0.1 mile)
            </h6>
            <div>
              <h6
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "16.41px",
                  float: "left"
                }}
              >
                {" "}
                Move-in from 20/04/21{" "}
              </h6>
              <h4 style={{
                float: "right",
              }}>
                <MdEmail color="#93227F" />{" "}
              </h4>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Result2 show={modalShow} onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Result;
