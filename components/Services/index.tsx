import React, { useState } from "react";
import Section from "./style";
import { RiComputerLine, RiReactjsFill, RiFlutterFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";
// import bobBg from "../assets/images/nobg.png";

// import Image from "next/image";

interface AppProps {
	isMobile?: boolean;
	flexDirection?: "left" | "right";
	toRight: boolean;
}

const serviceArr = [
	{
		name: "Front-end Developer",
		des: "Convert figma design into interactive user interface with javascript frameworks ",
		icon: () => (
			<RiReactjsFill className="computer text-3xl text-blue-500" />
		),
	},

	{
		name: "Back-end Developer",
		des: "Build RestFull APIs for client app, to interact with Database and servers",
		icon: () => (
			<FaNodeJs className="computer text-3xl text-green-400 " />
		),
	},
	{
		name: "Mobile App",
		des: "Build cross platform  mobile applications with flutter",
		icon: () => (
			<RiFlutterFill className="computer text-3xl text-sky-300 " />
		),
	},
];




const Index = ({ isMobile }: AppProps) => {
	const userState = useSelector((state: { auth: any }) => state.auth);

	return (
		<Section className="px-4 md:px-40 bg-white pb-20 py-16" id='services'>
			<div className="box_title">
				<h1 className="title header2 centered">Services</h1>

				<div className="grid  md:grid-cols-3 gap-6  w-full mt-11">
					{serviceArr.map((item, index) => (
						<div className="service_card bg-White rounded-md relative flex flex-col items-center text-center  p-6 shadow-md">
							<div className="box_icon">
								{item.icon()}
							</div>
							<h1 className="service_card_name ">
								{item.name}
							</h1>
							<p className="service_card_details mt-4">
								{item.des}
							</p>

							<button className="btn1 mt-5">
								Hire
							</button>

							<div className="arc absolute  m-0 p-0">
								<p className="font-joe text-4xl absolute right-0">
									{index + 1}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Index;
