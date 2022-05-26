import React, { useState } from "react";
import Navbar from "../webPagesComponents/Navbar";
import Sidebar from "../webPagesComponents/Sidebar";
import Footer from "../webPagesComponents/Footer";

const Home = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  return (
    <div>
      <Navbar openSidebar={openSidebar} />
      <Sidebar isSideBarOpen={isSideBarOpen} closeSidebar={closeSidebar} />
      {children}
      <Footer />
    </div>
  );
};

export default Home;
