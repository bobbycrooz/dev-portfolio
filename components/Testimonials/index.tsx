import Image from "next/image";
import React, { useState } from "react";
import Section from './style'
import App from '../../assets/images/app.png'
import {RiComputerLine} from 'react-icons/ri'


import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";
// import bobBg from "../assets/images/nobg.png";

// import Image from "next/image";

interface AppProps {
  isMobile?:boolean;
  flexDirection?:'left' | 'right';
  toRight:boolean;

}

const Index = () => {
  const userState = useSelector((state: { auth: any }) => state.auth);

  return (
    <Section className="px-40 bg-white   centered">
      <div className="box_col  p-4 space-y-8">
        <h1 className="title  header2 centered">My Testimonial</h1>
        <p className="body text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
          maximus est.
        </p>

        <div className="card_slider_rail mx-auto   ">
          <div className="card_train box p-8 ">
            {Array(2)
              .fill(1)
              .map((item, index) => (
                <div className="card_item bg-pri-5 shadow-lg  p-4 relative mx-8">
                  <div className=" bg-pri-1 absolute thumbnail "></div>

                  <div className="details ml-16">
                    <h1 className="header1">bobby dev</h1>
                    <p className="body">Regular Client</p>
                  </div>

                  <div className="comment mt-8 p-4">
                    <p className="body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras sit amet maximus est.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Index;
