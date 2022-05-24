import React from "react";
import Navbar from "../webPagesComponents/Navbar";
import Sidebar from "../webPagesComponents/Sidebar";
import Footer from "../webPagesComponents/Footer";

const Home = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      {children}
      <Footer />
    </div>
  );
};

export default Home;
