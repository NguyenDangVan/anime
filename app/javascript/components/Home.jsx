import React from "react";
import { Link } from "react-router-dom";
import Category from "./CollectionPage/Index";
import "../assets/home.scss";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">

    <div className="container my-4">
      <div className="top-title">
        <span className="title">What's popular</span>
        <Link
          to="/movies"
          className="fa fa-chevron-right"
        >
          <span className="fa fa-chevron-right"></span>
        </Link>
      </div>

      <hr className="my-4" />
      {/* Carousel Wrapper */}
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
        <div className="controls-top">
          <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
          <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
        </div>

        <ol className="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner slide-movies" role="listbox">
          <div className="carousel-item active">
            <Category />
          </div>
          <div className="carousel-item">
            <Category />
          </div>
          <div className="carousel-item">
            <Category />
          </div>
        </div>
      </div>
      {/* <!--/.Carousel Wrapper--> */}
    </div>


  </div>
);
