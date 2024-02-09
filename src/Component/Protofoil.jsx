import { Component } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import poert1 from "../Images/poert1.png";
import poert2 from "../Images/port2.png";
import poert3 from "../Images/port3.png";

export class Protofoil extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="protofoil ">
          <div className="text-center pt-4">
            <h2 className="text-uppercase  fw-bolder   ">
              protofoil component
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="poroto me-2"></div>
              <i class="fa-solid fa-star "></i>
              <div className="poroto ms-2 "></div>
            </div>
          </div>
          <div class="container-fluid ">
            <div class="row py-3 g-4 ps-1  d-flex justify-content-center align-items-center ">
              <div class="col-md-3 text-center  ">
                <div class=" overflow-hidden rounded-4 position-relative ">
                  <img src={poert1} alt=" poert" className="w-100" />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center  ">
                <div class=" overflow-hidden rounded-4 position-relative ">
                  <img src={poert2} alt=" poert" className="w-100" />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center  ">
                <div class=" overflow-hidden rounded-4 position-relative ">
                  <img src={poert3} alt=" poert" className="w-100" />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row py-3 g-4 ps-1  d-flex justify-content-center align-items-center ">
              <div class="col-md-3 text-center  ">
                <div class=" overflow-hidden rounded-4 position-relative ">
                  <img src={poert1} alt=" poert" className="w-100" />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center  ">
                <div class=" overflow-hidden rounded-4 position-relative ">
                  <img src={poert2} alt=" poert" className="w-100" />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center  ">
                <div class=" overflow-hidden rounded-4 position-relative ">
                  <img src={poert3} alt=" poert" className="w-100" />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
