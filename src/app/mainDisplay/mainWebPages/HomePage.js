import React from "react";
import Contact from "../webPagesComponents/Contact";
import FeaturedProducts from "../webPagesComponents/FeaturedProducts";
import Hero from "../webPagesComponents/Hero";
import Services from "../webPagesComponents/Services";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
