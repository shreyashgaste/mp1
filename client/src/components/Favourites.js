import React, { useEffect, useState } from "react";
import { useNavigate, Redirect, useParams } from "react-router-dom";
import Menu from "./MenuApi";
// import Feature from './feature';
// import "../css/style.css";
const Favourites = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [result, setResult] = useState([]);
  // const handleDetails = async (e,curElem) => {
  //     e.preventDefault();

  //     // const featureString = `/feature/${curElem.id}`;
  //     history.push(`/feature/${curElem.id}`);}

  // console.log(menuData);
  const [favs, setFavs] = useState([""]);
  let navigate = useNavigate();
  

  const handleElement = (e, curElem) => {
    e.preventDefault();
    const email = sessionStorage.getItem("userEmail");
    if (!email) {
      alert("Please Log In First...");
      return;
    }
    console.log("Shreyash");
    // console.log(curElem);
    navigate(`/feature/${curElem.id}`);
  };
  useEffect(() => {
    const showFav = async () => {
      const email = await sessionStorage.getItem("userEmail");
      const res = await fetch("http://localhost:5000/gotofavourites", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.length == 0) {
        alert("No vehicles added to favourites...");
        return;
      }
    //   console.log(data.message) ;
    //   alert(data.message);

      data.forEach((e1) =>
        menuData.forEach((e2) => {
          if (e1 == e2.id) {
            result.push(e2);
          }
        })
      );

      setFavs(result); // Can also use filter(item => item);
    };
    showFav();
  }, []);
  return (
    <>
      <section className="main-card--cointainer">
        {favs.map((curElem) => {
          return (
            <>
              <menuc>
                <div className="card-container" key={curElem.id}>
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title">
                        <strong>{curElem.name}</strong>
                      </h2>
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
                        Read More
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

export default Favourites;
