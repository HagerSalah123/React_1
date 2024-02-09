import { Component } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="about pt-5 d-flex  justify-content-center align-items-center">
          <div className="text-center pt-5 pb-4">
            <h2 className="text-uppercase text-white fw-bolder mb-3 fs-1 pt-5">
              about componeny
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="arrow me-2"></div>
              <i class="fa-solid fa-star text-white"></i>
              <div className="arrow ms-2 "></div>
            </div>
            <div className="container text-white pb-5">
              <div className="row px-5">
                <div className="col-md-6 ps-md-5 pb-5">
                  <p className="text-start">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
                <div className="col-md-6 ps-md-5 pb-5">
                  <p className="text-start">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
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
