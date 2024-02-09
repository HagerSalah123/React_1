import { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer pt-3 pb-5">
          <div class="container top-0 cards    ">
            <div class="row d-flex justify-content-between align-items-center  pt-5 text-white">
              <div class="col-md-4 pb-3 ">
                <div className="card-body text-center ">
                  <h3 className="text-uppercase">location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div class="col-md-4 pb-3  ">
                <div className="card-body text-center  ">
                  <h3 className="pb-2 text-uppercase">around the web</h3>
                  <div className="icons d-flex s justify-content-center pb-3">
                    <li className="pe-2">
                      <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li className="pe-2">
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li className="pe-2">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                    <li className="pe-2">
                      <i class="fa-solid  fa-globe"></i>
                    </li>
                  </div>
                </div>
              </div>
              <div class="col-md-4 pb-3 ">
                <div className="card-body text-center">
                  <h3 className="text-uppercase">about framework</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap <br /> theme
                    created by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center end-footer text-white pt-3 pb-1">
          <p>Copyright © Your Website 2021</p>
        </div>
      </>
    );
  }
}
