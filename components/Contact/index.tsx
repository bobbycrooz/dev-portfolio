import { useRouter } from "next/router";
import React from "react";
import Section from "./style";
// import App from "../../assets/images/app.png";
// import { RiComputerLine } from "react-icons/ri";

// import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";
// import bobBg from "../assets/images/nobg.png";

// import Image from "next/image";

// interface AppProps {
// 	isMobile?: boolean;
// 	flexDirection?: "left" | "right";
// 	toRight: boolean;
// }

const Index = () => {
  // const userState = useSelector((state: { auth: any }) => state.auth);
  const { push } = useRouter();

  return (
    <Section
      className="stack px-4 md:px-40 bg-transparent halfViewScreen py-10 "
      id="contact"
    >
      <div className="box centered  my-11 py-20  w-full h-full">
        <div className="content space-y-6 text-left strictFadeIn ">
          <h1 className="header2-custom text-white">Why you should Hire me?</h1>

          <ul className="body-custom text-white md:w-1/2">

            <li>
              The aim of every business entity building products is to deliver
              quality product to their clients
            </li>

            <li>
              I am not just a frontend developer, i take responsibilty of the
              business and the product i am building
            </li>

            <li>And worry about it's growth and scalabiliy.</li>
          </ul>

          <button
            onClick={() =>
              push(
                "https://wa.me/message/LXJBLFCKFZ7OP1"
              )
            }
            className="w_btn"
          >
           <p className="z-10"> Whatsapp me</p>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Index;
