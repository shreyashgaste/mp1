import React from "react";
import { useNavigate, Redirect } from "react-router-dom";
// import Feature from './feature';
// import "../css/style.css";
const MenuCard = ({ filterid, menuData }) => {
  // const handleDetails = async (e,curElem) => {
  //     e.preventDefault();

  //     // const featureString = `/feature/${curElem.id}`;
  //     history.push(`/feature/${curElem.id}`);}

  // console.log(menuData);
  let navigate = useNavigate();
  const handleElement = (e, curElem) => {
    e.preventDefault();
    console.log("Shreyash");
    // console.log(curElem);
    navigate(`/feature/${curElem.id}`);
  };
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          // const {id, name, category, image, description} = curElem;
          return (
            <>
              <menuc>
                <div className="card-container" key={curElem.id}>
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title"><strong>{curElem.name}</strong></h2>
                      <span className="card-description subtle">
                        {/* {curElem.description} <br /> */}
                        Category: {curElem.category} <br />
                        Price: ₹{curElem.price} <br />
                        Range: {curElem.range} <br />
                      </span>
                      <button
                        className="card-read"
                        onClick={(e) => handleElement(e, curElem)}
                      >
                        Read More{" "}
                      </button>
                      {/* <div className="card-read"> <a href="#">More</a>onClick={e=>handleDetails(e,curElem)} </div> */}
                    </div>
                    <br />
                    <img
                      src={curElem.image1}
                      alt="images"
                      className="card-media"
                    />
                  </div>
                </div>
              </menuc>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
