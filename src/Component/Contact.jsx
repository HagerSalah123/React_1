import { Component } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="contact ">
          <div className="text-center pt-4">
            <h2 className="text-uppercase  fw-bolder   ">contact section </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="poroto me-2"></div>
              <i class="fa-solid fa-star "></i>
              <div className="poroto ms-2 "></div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="from ps-5 ms-5">
                <form action="" className="ps-5 ms-5">
                  <label htmlFor="username" className=" top-0 ">
                    userName
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 border-bottom py-3  w-75"
                  />
                  <label htmlFor="" className=" top-0 ">
                    userAge
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 border-bottom py-3  w-75 "
                  />
                  <label htmlFor="" className=" top-0 ">
                    userEmail
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 border-bottom py-3  w-75 "
                  />
                  <label htmlFor="" className=" top-0 ">
                    userPassword
                  </label>
                  <input
                    type="text"
                    className="form-control border-0 border-bottom py-3  w-75 "
                  />
                  <button className="btn mt-4  mb-5 text-white ">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
