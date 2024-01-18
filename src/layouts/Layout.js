import React from "react";

// @layouts
import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      {/* @navbar */}
      <Navbar />

      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
