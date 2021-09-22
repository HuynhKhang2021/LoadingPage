import React from "react";
import myImage from "../../assets/Thanh-Ly-2.jpg";
import './Start.css'
const Start = () => {
  return (
    <div className="start">
      <div className="row">
        <div className="start-above row">
          <h1 className="start-above__title col-7">
            Transforming M&As to everyone's choice of strategies
          </h1>
          <img src={myImage} alt="" className="start-above__center col-3" />
          <div className="start-above__right col-2">
            <img src={myImage} alt="" className="start-above__right-image1" />
            <img src={myImage} alt="" className="start-above__right-image2" />
          </div>
        </div>
        <div className="start-under row">
          <div className="start-under__left col-6">
            <p className="start-under__left-desc">SELLER and BUYERS from all over the world can meet and execute
              transactions on M&A</p>
            <button className="start-under__left-btn">
              Get Start
            </button>
          </div>
          <img src={myImage} alt="" className="start-under__image1 col-2" />
          <img src={myImage} alt="" className="start-under__image2 col-2" />
          <img src={myImage} alt="" className="start-under__image3 col-2" />
        </div>
      </div>
    </div>
  );
};

export default Start;
