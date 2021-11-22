import React from "react";
import { useParams } from "react-router-dom";
import Menu from "./MenuApi";
import RatingPage from "./RatingPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Navbar1 = () => {
  return (
    <>
      <header>
        <div class="topnav" id="myTopnav">
          <a href="/home1">
            Home
          </a>

          <a href="/compare">Compare</a>
          <a href="/">Logout</a>
        </div>
      </header>
    </>
  );
};

const Feature = () => {
  const { id } = useParams();
  console.log(id);
  let curElem = {};
  console.log(Menu.length);
  for (let i = 0; i < Menu.length; i++) {
    if (Menu[i].id === Number(id)) {
      curElem = Menu[i];
      break;
    }
  }
  return (
    <>
      <Navbar1 />

      <div className="feature-wrapper">
        <h1 align="center">{curElem.name}</h1>
        {/* <div
            className="gallery js-flickity"
            data-flickity-options='{ "wrapAround": true }'
          >
            <div className="gallery-cell">
              <img src={curElem.image1} alt="" />
            </div>
            <div className="gallery-cell">
              <img src={curElem.image2} alt="" />
            </div>
            <div className="gallery-cell">
              <img src={curElem.image3} alt="" />
            </div>
            <div className="gallery-cell">
              <img src={curElem.image4} alt="" />
            </div>
            <div className="gallery-cell">
              <img src={curElem.image5} alt="" />
            </div>
          </div> */}
        <div className="carousal-wrapper">
          <Carousel useKeyboardArrows autoPlay>
            <div>
              <img style={{ width: "50%" }} src={curElem.image1} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={curElem.image2} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={curElem.image3} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={curElem.image4} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={curElem.image5} alt="" />
            </div>
          </Carousel>
        </div>
        <h4 align="center">Vehicle Specifications</h4>
        {/* <h4 id='title'>React Dynamic Table</h4> */}
        <table id="students">
          <tbody>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Category</td>
              <td>{curElem.category}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{curElem.price}</td>
            </tr>
            <tr>
              <td>range</td>
              <td>{curElem.range}</td>
            </tr>
            <tr>
              <td>Battery type</td>
              <td>{curElem.battery_type}</td>
            </tr>
            <tr>
              <td>Battery capacity</td>
              <td>{curElem.battery_capacity}</td>
            </tr>
            <tr>
              <td>Fast charging</td>
              <td>{curElem.fast_charging}</td>
            </tr>
            <tr>
              <td>Charging time</td>
              <td>{curElem.charging_time}</td>
            </tr>
            <tr>
              <td>Top speed</td>
              <td>{curElem.top_speed}</td>
            </tr>
            <tr>
              <td>Motor type</td>
              <td>{curElem.motor_type}</td>
            </tr>
            <tr>
              <td>Motor power</td>
              <td>{curElem.motor_power}</td>
            </tr>
            <tr>
              <td>Torque</td>
              <td>{curElem.torque}</td>
            </tr>
            <tr>
              <td>Load capacity</td>
              <td>{curElem.load_capacity}</td>
            </tr>
            <tr>
              <td>Other features</td>
              <td>{curElem.other_features}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{curElem.description}</td>
            </tr>
            {/* <tr><td>Category</td><td>{curElem.category}</td></tr> */}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h4 align="center">Service stations of {curElem.name}</h4>
      <div className="mapcont">
        <iframe src={curElem.gmap}></iframe>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h2 style={{textAlign: "center"}}>Rate this vehicle...</h2>
      <RatingPage vehicleId={id}/>
    </>
  );
};

export default Feature;
