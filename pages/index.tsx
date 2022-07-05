import React, {  } from "react";
// import HeadMeta from "../components/Head";
// import { motion } from "framer-motion";
// import { Navigation } from "../components/Navigation/Navigation";
// import router from "next/router";

// import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";

import Navbar from "../components/Navbar";
// import Image from "next/image";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials";

const Home = ({ isMobile }: HomeProps) => {
  // const userState = useSelector((state: { auth: any }) => state.auth);

  return (
    <>
      <Navbar isMobile={isMobile}/>

      <Hero isMobile={isMobile} />

      <Projects  isMobile={isMobile} />

      <Services toRight={!true}  isMobile={isMobile} />

      <Contact />

      {/* <Testimonials /> */}

      <Footer />
    </>
  );
};

interface HomeProps {
  isMobile: boolean;
  clientWidth: number;
  currentPath: string;
}

export default Home;
