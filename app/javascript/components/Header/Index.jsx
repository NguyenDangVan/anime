import React from "react";
import "../../assets/header.scss";
import { Link } from "react-router-dom";

// import Search from "./Search";
// import LeftNav from "./LeftNav";
// import RightNav from "./RightNav";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="sub_media">
          <div className="nav_wrapper">
            <Link to="/" className="logo">
              <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDb)"
              >
              </img>
            </Link>
            <ul className="dropdown_menu">
              <li>Movies</li>
              <li>TV Shows</li>
              <li>Categories</li>
            </ul>
          </div>
          <div className="flex">
            <ul className="primary">
              <li>Login</li>
              <li>Join us</li>
              <li>
                <a className="search">
                  <span className="search blue"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
