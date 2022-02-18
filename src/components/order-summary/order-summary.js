import React from "react";
import MusicImg from "../../assets/images/icon-music.svg";

const OrderSummary = () => {
  return (
    <React.Fragment>
      <h1 className="title__primary">Order Summary</h1>
      <p className="card__copy content">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like&#33;
      </p>
      <div className="card__plan flex__container">
        <img src={MusicImg} alt="" className="img__music" />
        <div>
          <p className="title__plan">Annual Plan</p>
          <p className="content__plan">$59.99/year</p>
        </div>
        <a className="content__link" href="#id">
          Change
        </a>
      </div>
    </React.Fragment>
  );
};

export default OrderSummary;
