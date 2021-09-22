import React from "react";
import myImage from "../../assets/Thanh-Ly-2.jpg";
import './Reason.css'
const Reason = () => {
  return (
    <div className="reason">
      <div className="row">
        <div className="reason-left col-6">
          <div
            className="reason-left__image"
            style={{ backgroundImage: `url(${myImage})` }}
          ></div>
          <div className="reason-left__circle"></div>
        </div>
        <div className="reason-right col-6">
          <h1 className="reason-right__title">Why you should choose M&M</h1>
          <div className="reason-right__list">
            <div className="reason-right__item">
              <div className="reason-right__item-icon">
                  <div className="reason-right__icon-main"></div>
              </div>
              <span className="reason-right__item-content">
                <h5 className="reason-right__item-title">Reason 1</h5>
                <p className="reason-right__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget vulputate urna, morbi. Mauris duis.
                </p>
              </span>
            </div>
            <div className="reason-right__item">
              <div className="reason-right__item-icon">
                  <div className="reason-right__icon-main"></div>
              </div>
              <span className="reason-right__item-content">
                <h5 className="reason-right__item-title">Reason 1</h5>
                <p className="reason-right__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget vulputate urna, morbi. Mauris duis.
                </p>
              </span>
            </div><div className="reason-right__item">
              <div className="reason-right__item-icon">
                  <div className="reason-right__icon-main"></div>
              </div>
              <span className="reason-right__item-content">
                <h5 className="reason-right__item-title">Reason 1</h5>
                <p className="reason-right__item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget vulputate urna, morbi. Mauris duis.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
