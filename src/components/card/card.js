import React from "react";
import HeroImg from "../../assets/images/illustration-hero.svg";
import MusicImg from "../../assets/images/icon-music.svg";
const Card = () => {
  return (
    <React.Fragment>
      <article className="card">
        <div className="card__header">
          <figure className="card__figure">
            <img src={HeroImg} alt="Hero Pic" />
          </figure>
        </div>

        <div className="card__body">
          <h1 className="title__primary">Order Summary</h1>
          <p className="card__copy content">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like&#33;
          </p>
          <div className="card__plan">
            <img src={MusicImg} alt="" className="img__music" />
            <div className="card__feature">
              <p className="title__plan">Annual Plan</p>
              <p className="content__plan">$59.99/year</p>
            </div>
            <a className="content__link" href="#id">
              Change
            </a>
          </div>
        </div>
        <footer className="card__footer">
          <div>
            <button type="submit" className="btn__overlay--full">
              Proceed to Payment
            </button>
            <div>
              <a className="card__cancel--link" href="#cancel">
                Cancel Order
              </a>
            </div>
          </div>
        </footer>
      </article>
    </React.Fragment>
  );
};

export default Card;
