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
  const {push} = useRouter()

  return (
    <Section className="hero   md:px-40 py-11 md:py-20 bg-white md:h-1/2 flex justify-around flex-col md:flex-row shadow index-6">
   
      <div
        className={`${
          !isMobile && "box_text"
        } text-left space-y-3 md:space-y-6  p-4 md:p-0 `}
      >
        <h1 className="header header_bigger">
          Hey, {isMobile && <br />} I’m Idris{" "}
        </h1>

        <p className="body ">
          I build full fledge web platforms with <span>Javascript</span>
        </p>

        <p className="body ">
          I have professional experience in building pixel perfect User
          interface on web and mobile with <span>ReactJs</span>{" "}
          <span>VueJs</span> <span>NextJs</span>,


          <br />I am more passionate about impacting significantly in projects
        </p>

        <button onClick={() => push('https://drive.google.com/file/d/1nDYnviSnKnp6Uzt5eXmf5vgH74giZNYM/view?usp=sharing')} className="btn shadow-md">Resume</button>
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
