import Image from "next/image";
import React, { useState } from "react";
import Section from "./style";
import App from "../../assets/images/app.png";
import { RiComputerLine } from "react-icons/ri";

import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";
// import bobBg from "../assets/images/nobg.png";

// import Image from "next/image";

interface AppProps {
	isMobile?: boolean;
	flexDirection?: "left" | "right";
	toRight: boolean;
}

const Index = () => {
	const userState = useSelector((state: { auth: any }) => state.auth);

	return (
		<Section className="stack px-4 md:px-40 bg-transparent halfViewScreen py-10 " id='contact'>
			<div className="box centered  my-11 py-20  w-full h-full">
				<div className="content space-y-6 text-center strictFadeIn">
					<h1 className="header2-custom text-white">
						Get in touch
					</h1>

					<p className="body-custom text-white md:w-1/2 mx-auto">
						Although I’m not currently looking for any
						new opportunities, my inbox is always open.
						Whether you have a question or just want to
						say hi, I’ll try my best to get back to you!
					</p>

					<button className="btn shadow-md">
						Say Hello
					</button>
				</div>
			</div>
		</Section>
	);
};

export default Index;
