import React from "react";
import teacherImg from "../../assets/img/hero.png";
import "../HeroSection/HeroSection.css";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__promo">✅Giảm giá 30% khi đăng ký lần đầu</p>
        <h1 className="hero__title">
          Nâng cao kỹ năng kỹ thuật của bạn cùng chúng tôi.
        </h1>
        <p className="hero__desc">
          Xây dựng kỹ năng với các khóa học của chúng tôi và được cố vấn từ các
          công ty đẳng cấp thế giới.
        </p>
        <div className="hero__search">
          <input type="text" placeholder="Tìm kiếm khóa học..."></input>
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
            Linh hoạt
          </div>
          <div className="hero__feature">
            <img
              src="https://themewagon.github.io/E-learning/images/banner/check-circle.svg"
              alt="Check Icon"
              className="icon__feature"
            />
            Lộ trình học tập
          </div>
          <div className="hero__feature">
            <img
              src="https://themewagon.github.io/E-learning/images/banner/check-circle.svg"
              alt="Check Icon"
              className="icon__feature"
            />
            Cộng đồng
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
