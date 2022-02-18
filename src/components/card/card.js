import React from "react";
import OrderSummary from "../order-summary/order-summary";
import HeroImage from "../hero-image/hero-image";
import Button from "../button/button";

const Card = () => {
  return (
    <React.Fragment>
      <article className="card">
        <div className="card__header">
          <HeroImage />
        </div>

        <div className="card__body">
          <OrderSummary />
        </div>

        <footer className="card__footer">
          <div>
            <Button />
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
