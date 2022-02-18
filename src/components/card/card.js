import React from "react";
import { ReactComponent as HeroImg } from "../../assets/images/illustration-hero.svg";

const Card = () => {
  return (
    <React.Fragment>
      <article className="card">
        <div className="card__header bottom__space">
          <figure className="card__figure">
            <HeroImg alt="Hero Image" />
          </figure>
        </div>

        <div className="card__body bottom__space">
          <h1 className="card__title white ease__in finger__pointer bottom__space">
            Order Summary
          </h1>
          <p className="card__copy bottom__space">
            You can now listento millions of songs, audiobooks, and podcasts on
            any device anwhere you like&#33;
          </p>
          <div className="card__plan flex__use">
            <img src="" alt="" />
            <p>Annual Plan</p>
            <p>$59.99/year</p>
            <a href="#id">Change</a>
          </div>
        </div>
        <footer className="card__footer">
          <div>
            <button type="submit" className="">
              Proceed to Payment
            </button>
            <div>
              <a href="#cancel">Cancel Order</a>
            </div>
          </div>
        </footer>
      </article>
    </React.Fragment>
  );
};

export default Card;
