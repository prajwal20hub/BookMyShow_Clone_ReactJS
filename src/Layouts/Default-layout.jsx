import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Defaultlayout =
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

export default Defaultlayout;
