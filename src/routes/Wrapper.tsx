import React, { FC } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
