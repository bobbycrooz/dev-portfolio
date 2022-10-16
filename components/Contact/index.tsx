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
  const {push} = useRouter()

  return (
    <Section
      className="stack px-4 md:px-40 bg-transparent halfViewScreen py-10 "
      id="contact"
    >
      <div className="box centered  my-11 py-20  w-full h-full">
        <div className="content space-y-6 text-center strictFadeIn">
          <h1 className="header2-custom text-white">Get in touch</h1>

          <p className="body-custom text-white md:w-1/2 mx-auto">
            My name is idris, i am a software developer, I build web
            applications with javascript, and I write backend and frontend code
            to create a full-fledged working web-application.
          </p>

          <button  onClick={() => push('https://docs.google.com/document/d/1eNKrED88lF1vW6qKYP18B9d2E-E6Vaxe6ahePyT7m5g/edit?usp=sharing')}  className="border border-white hover:shadow-white p-3 px-6 shadow-md">See my Application Letter</button>
        </div>
      </div>
    </Section>
  );
};

export default Index;
