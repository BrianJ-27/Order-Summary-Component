import React from "react";
import HeroImg from "../../assets/images/illustration-hero.svg";

const HeroImage = () => {
  return (
    <figure className="card__figure">
      <img src={HeroImg} alt="Hero Pic" />
    </figure>
  );
};

export default HeroImage;
