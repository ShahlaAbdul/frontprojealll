import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="header">
            <div className="header_left">
              <span>+12312-3-1209</span>
              <p>SUPPORT@COLORLIB.COM</p>
            </div>
            <div className="header_right">Login</div>
          </div>
        </div>
        <nav>
          <div className="navbar">
            <div className="nav_left">
              <img
                src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
                alt=""
              />
            </div>
            <div className="nav_right">
              <ul className="nav_right_pages">
                <li>
                  <NavLink to={"/"} className={"page"}>
                    {" "}
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/addpage"} className={"page"}>
                    Add Page
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/basket"} className={"page"}>
                    Basket Page
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"} className={"page"}>
                    Wishlist Page
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/detail"} className={"page"}>
                    Detail Page
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
