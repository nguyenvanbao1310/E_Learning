// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header">
      <div className="header_container">
        <div className="logo">
          E-Learning
          <span className="dot">.</span>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="header_nav" onClick={closeMenu}>
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
          {menuOpen && (
            <li className="mobile-buttons">
              <button className="btn btn_SignIn">Đăng nhập</button>
              <button className="btn btn_SignUp">Đăng kí</button>
            </li>
          )}
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
