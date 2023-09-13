import Image from "next/image";
import React from "react";
import Section from "./style";
// import App from '../../assets/images/app.png'
import { BsArrowDown } from "react-icons/bs";
import { useRouter } from "next/router";
import bobBg from "../../assets/images/nobg.png";

// import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";
// import bobBg from "../assets/images/nobg.png";

// import Image from "next/image";

// interface AppProps {
//   isMobile?: boolean;
//   flexDirection?: "left" | "right";
//   toRight: boolean;
// }

const Index = ({ isMobile }: { isMobile: boolean }) => {
  // const userState = useSelector((state: { auth: any }) => state.auth);
  const { push } = useRouter();

  return (
    <Section className="hero   md:px-20 py-11 md:py-20 bg-white md:h-1/2 flex justify-around items-center flex-col md:flex-row shadow index-6 ">
      <div
        className={`${
          !isMobile && "box_text"
        } text-left space-y-4 md:space-y-6  p-4 md:p-0 `}
      >
        <h1 className="header header_bigger">
          Hey, {isMobile && <br />} I’m Idris{" "}
        </h1>

        {/* <p className="text-pri-3 text-[26px] font-joe ">
          I build full fledge web platforms with <span>Javascript</span>
        </p> */}

        <p className="text-pri-3 text-xl md:text-[26px] font-joe space-y-6 leading-[120%]  ">
          A <b className="underline">prOfessional</b> software developer
          specialized in building
         
          web applications with Typescript tools{" "}
          <span className="text-pri-main font-medium border p-1 border-pri-main">React</span>{" "}
          <span>VueJs</span> <span className="text-pri-main font-medium border p-1 border-pri-main">NextJs</span>,
          
          <br />

          <p className="mt-4">
            I also implement logics on the server with  <span className="text-pri-main font-medium border p-1 border-pri-main">Express Js</span>on Node,
            <br />
            <br />
            Managing deployment infrastructure with{" "}
            <br />
            
            <span className="text-pri-main font-medium border p-1 border-pri-main">AWS</span> and devOps practice.
            
          </p>
        </p>

        <div className="flex space-x-4">
            <button
          onClick={() =>
            push(
              "https://drive.google.com/file/d/1nDYnviSnKnp6Uzt5eXmf5vgH74giZNYM/view?usp=sharing"
            )
          }
          className="btn shadow-md"
        >
          Resume
        </button>

          
          <div className="open border border-pri-main  p-3 px-6 flex space-x-3 items-center">
            <div className="dot w-2 h-2 bg-pri-main rounded-full"></div>
            <p className="text-pri-main font-semibold">Open to offers</p>
          </div>
      </div>
      </div>


      {isMobile && (
        <div className="down w-full flex justify-center mt-11">
          <div className="down_arrow UpDown rounded-full shadow p-4">
            <BsArrowDown className="text-3xl text-pri-main" />
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="box_image  relative ">
          <Image src={bobBg} alt="Picture of the author" layout="fill" />
        </div>
      )}
      {/* <img alt="" className="box_full" /> */}
    </Section>
  );
};

export default Index;
