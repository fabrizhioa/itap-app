import React from "react";
import Content from "../../components/home/Content";
import Content2 from "../../components/home/Content2";
import Content3 from "../../components/home/Content3";
import Content4 from "../../components/home/Content4";
import Footer from "../../components/Footer";
import Hero from "../../components/home/Hero";
import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Footer />
    </>
  );
};

export default Home;
