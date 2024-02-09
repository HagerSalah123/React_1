import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg p-4 position-sticky top-0">
          <div className="container">
            <Link
              className="navbar-brand text-uppercase text-white fw-bolder fs-2"
              to="/home"
            >
              start framework
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 me-2"
                    aria-current="page"
                    to="/about"
                  >
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 me-2"
                    aria-current="page"
                    to="/protofoil"
                  >
                    protofoil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 me-2"
                    aria-current="page"
                    to="/contact"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
