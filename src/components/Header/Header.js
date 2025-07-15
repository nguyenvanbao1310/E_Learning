// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="logo">
          E-Learning
          <span className="dot">.</span>
        </div>
        <nav className="nav">
          <ul className="header_nav">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/">Khóa học</Link>
            </li>
            <li>
              <Link to="/">Hướng dẫn</Link>
            </li>
            <li>
              <Link to="/favorites">Yêu thích</Link>
            </li>
            <li>
              <Link to="/">Tài liệu</Link>
            </li>
          </ul>
        </nav>
        <div className="headers_button">
          <button className="btn btn_SignIn">Đăng nhập</button>
          <button className="btn btn_SignUp">Đăng kí</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
