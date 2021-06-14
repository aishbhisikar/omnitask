import React from "react";

function SidebarContent() {
  return (
    <>
      <style>
        {`
        .side-label{
            color:#CA18AA;
            font-size: 16px;
            margin-top:20px;
        }
        .form-control{
            background-color:#0C0B0B;
            color:white;
            border:none;
            border-radius:15px;
        }
        .pinkbtn{
            display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 50px;
color:white;
position: static;
width: 354px;
height: 59px;
left: 10px;
top: 10px;
background: #D41553;
border-radius: 10px;
flex: none;
order: 0;
flex-grow: 0;
margin-top:20px;
        }
        @media only screen and (max-width: 600px) {.side-content{padding-right:55px;max-width:360px}.pinkbtn{width: 250px;}
        `}
      </style>

      <div className="side-content">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Find a rental property</h3>
        </div>

        <div>
          <label className="side-label">Search area</label>
          <input
            type="text"
            className="form-control side-inputs"
            placeholder="eg. Oxford or NW3"
          />
        </div>

        <div className="row">
          <div className="col">
            <label className="side-label">Minimum beds</label>
            <select className="form-control " name="No min">
              <option value="No min">No min</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col">
            <label className="side-label">Maximum beds</label>
            <select className="form-control " name="No max">
              <option value="No min">No max</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div>
          <label className="side-label">Price per</label>
          <select className="form-control " name="Month">
            <option value="Month">Month</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="row">
          <div className="col">
            <label className="side-label">Minimum price</label>

            <select className="form-control " name="No min">
              <option value="No min">No min</option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col">
            <label className="side-label">Maximum price</label>

            <select className="form-control " name="No max">
              <option value="No max">No max</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <button className=" pinkbtn" type="button">
          FIND PROPERTIES
        </button>
      </div>
    </>
  );
}

export default SidebarContent;
