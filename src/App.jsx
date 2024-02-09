import { Component } from "react";
import "./App.css";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import Home from "./Component/Home";
import { Protofoil } from "./Component/Protofoil";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Notfound } from "./Component/Notfound";

const myRouter = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "protofoil", element: <Protofoil /> },
  { path: "contact", element: <Contact /> },
  { path: "*", element: <Notfound /> },
]);
export default class App extends Component {
  render() {
    return (
      <>
        {/* <About />
        <Contact />
        <Footer />
        <Home />
        <Navbar />
        <Protofoil /> */}
        <RouterProvider router={myRouter} />
      </>
    );
  }
}
