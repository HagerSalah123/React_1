import { Component } from "react";
import { Navbar } from "./Navbar";

export class Notfound extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1 className="d-flex justify-content-center align-items-center vh-100  text-white fw-bolder not">
          <i class="fa-solid fa-triangle-exclamation text-warning"></i>404 Not
          Found Page
        </h1>
      </>
    );
  }
}
