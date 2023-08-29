import React from "react";
import MovieNavBar from "../Components/MovieNavBar";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
const Movielayout =
  (Component) =>
  (...props) => {
    return (
      <div>
        <NavBar />
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default Movielayout;
