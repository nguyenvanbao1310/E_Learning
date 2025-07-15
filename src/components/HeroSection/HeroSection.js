import React from "react";
import teacherImg from "../../assets/img/hero.png";
import "../HeroSection/HeroSection.css";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__promo">✅ Get 30% off on first enroll</p>
        <h1 className="hero__title">
          Advance your engineering skills with us.
        </h1>
        <p className="hero__desc">
          Build skills with our courses and mentor from world-class companies.
        </p>
        <div className="hero__search">
          <input type="text" placeholder="search courses..."></input>
          <button>
            <i className="icon-search fa fa-search"></i>
          </button>
        </div>
        <div className="hero__features">
          <div className="hero__feature">
            <img
              src="https://themewagon.github.io/E-learning/images/banner/check-circle.svg"
              alt="Check Icon"
              className="icon__feature"
            />
            Flexible
          </div>
          <div className="hero__feature">
            <img
              src="https://themewagon.github.io/E-learning/images/banner/check-circle.svg"
              alt="Check Icon"
              className="icon__feature"
            />
            Learning path
          </div>
          <div className="hero__feature">
            <img
              src="https://themewagon.github.io/E-learning/images/banner/check-circle.svg"
              alt="Check Icon"
              className="icon__feature"
            />
            Community
          </div>
        </div>
      </div>

      <div className="hero__images">
        <img src={teacherImg} alt="Teacher" className="hero__image" />
      </div>
    </section>
  );
};

export default HeroSection;
