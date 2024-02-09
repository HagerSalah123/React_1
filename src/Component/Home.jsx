import { Component } from "react";
import home_img from "../Images/avataaars.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="home  ">
          <img
            src={home_img}
            alt=" home_img"
            className="d-flex justify-content-center align-items-center m-auto pt-3 mb-3"
          />
          <div className="text-center pt-4">
            <h1 className="text-uppercase text-white fw-bolder fs-2 head ">
              start framework
            </h1>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="arrow me-2"></div>
              <i class="fa-solid fa-star text-white"></i>
              <div className="arrow ms-2 "></div>
            </div>
            <div className="text-white pb-5 end-home">
              Graphic Artist - Web Designer - Illustrator
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
