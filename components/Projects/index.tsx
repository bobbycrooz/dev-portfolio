import Image from "next/image";
// @ts-ignore 
import React, { useRef } from "react";
import Section, { CardLayout } from "./style";
import admin from "../../assets/images/admin-lite.png";
import gig from '../../assets/images/gig.png'
import ribPro from '../../assets/images/pro.png'
import ajo from '../../assets/images/ajo.png'
import defi from '../../assets/images/defi.png'
import med from '../../assets/images/med.png'
import dzines from '../../assets/images/dzines.png'
import quiz from '../../assets/images/quiz.png'
import paw from '../../assets/images/paw.png'
import country from '../../assets/images/country.png'
import selbet from '../../assets/images/selfbet.png'
import ware from '../../assets/images/warehouse_screenshot.png'
import kaima from '../../assets/images/kaima.png'


// import { gsap } from "gsap";
import Link from "next/link";
// import { Item } from "framer-motion/types/components/Reorder/Item";
// import { useSelector } from "react-redux";
// import { randomPhoto } from "../assets/photos";
// import bobBg from "../assets/images/nobg.png";

// import Image from "next/image";

interface AppProps {
	isMobile?: boolean;
	flexDirection?: "left" | "right";
	toRight: boolean;
	projectInfo: {
		[key: string]: any;
	};
}

const projectArr = [
		{
		feature: "aesthetic female fashion store",
		name: "KAIMA.FASHION",
		description:
			"Fashion store brand showcase",
		live: "https://kaima.fashion/",
		tools: ["NextJs", "Typescript", "mailchimp", "TailwindCss"],
		img: kaima,
	},
	{
		feature: "warehouse management system",
		name: "WAREHOUZIT.COM",
		description:
			"Built for warehouse owners to connect with warehouse seekers to find a secure place for their goods digitaly",
		live: "https://warehouzit.com/",
		tools: ["NextJs", "Typescript", "ContextAPI", "TailwindCss"],
		img: ware,
	},
		{
		feature: "betting platform",
		name: "SELFBET",
		description:
			"Digital pool betting platform that allows users to bet on football matches and win big",
		live: "https://selfbet.vercel.app",
		tools: ["NextJs", "Typescript", "ContextAPI", "TailwindCss"],
		img: selbet,
	},
	{
		feature: "web3",
		name: "GIGXPAD",
		description:
			"A crypto platform that provides avenue for traders to Buy/Sell  and Hold crypto assets",
		live: "https://gigxpad.com/",
		tools: ["NextJs", "Typescript", "Redux", "TailwindCss"],
		img: gig,
	},

	{
		feature: "dashboard",
		name: "Admin-lite",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://admin-lite.netlify.app/admin-login",
		tools: ["NextJs", "Typescript", "Redux", "TailwindCss"],
		img: admin,
	},

	{
		feature: "Landing page",
		name: "Ribbon protocol",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://focused-brown-23435a.netlify.app/#/",
		tools: ["NextJs", "Typescript", "Redux", "TailwindCss"],
		img: ribPro,
	},
	
		{
		feature: "DEFI platform",
		name: "Ribbbon Defi",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://dev-defi.ribbonblockchain.com",
		tools: ["NextJs", "Typescript", "Redux", "TailwindCss"],
		img: defi,
	},
	
		{
		feature: "Pharmacy Landing page",
		name: "MedonCal",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://aptt.netlify.app/",
		tools: ["NextJs", "Typescript", "Redux", "TailwindCss"],
		img: med,
	},
	
			{
		feature: "Dashboard",
		name: "Ajo",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://quizzical-blackwell-c2a880.netlify.app/",
		tools: ["NextJs", "Typescript", "Redux", "TailwindCss"],
		img: ajo,
	},
	
			{
		feature: "E-Commerce",
		name: "D-zines",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://d-ecommerce.netlify.app/",
		tools: ["ReactJs", "GraphQL", "", ""],
		img: dzines,
	},
	
				{
		feature: "Quizz App",
		name: "Quizz",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://fancbt.netlify.app/",
		tools: ["ReactJs", "Nodejs", "Styled-components", "ExpressJs"],
		img: quiz,
	},
	
					{
		feature: "E-Commerce",
		name: "Paw Finder",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://pawkernel.netlify.app/",
		tools: ["VueJs", "Nodejs", "Sass", "VueX"],
		img: paw,
	},
	{
			feature: "Task",
		name: "Counrty Select",
		description:
			"An industrial admin dashboard to track, monitor and manage transaction, users, assets of the company",
		live: "https://bobgig.netlify.app/",
		tools: ["Typescript", "Styled-Components"],
		img: country,
	},
];

const Projects =  ({ isMobile }: {isMobile:boolean}) => {
	// const userState = useSelector((state: { auth: any }) => state.auth);
	const boxRef = useRef(null);

	
	// React.useEffect(() => {
	// 	gsap.to(boxRef.current, { rotation: "+=360" });
	//   });

	return (
		<Section className="bg-white  py-16 " id='project'>
			<h1 ref={boxRef} className="title  header2 centered  my-10">Projects</h1>

			{projectArr.map((item, index) => (
				<ProjectItem
				isMobile={isMobile}
					key={index}
					projectInfo={item}
					toRight={index % 2 === 0 || index === 0}
				/>
			))}
		</Section>
	);
};

const ProjectItem = ({ toRight, projectInfo ,  isMobile }: AppProps) => {
	// const userState = useSelector((state: { auth: any }) => state.auth);

	return (
		<CardLayout
		isMobile={isMobile}
			className={` feature md:px-48 p-4 md:p-11  my-20  ${
				toRight && " bg-[#f0f0f081]"
			}`}
		>
			<div
				className={`${!isMobile && "flex flex-row"}  items-center ${
					toRight && "flex-row-reverse "
				}`}
			>
				<div className=" portfolio-image md:w-[480px]  " >
					<Image src={projectInfo.img} />
				</div>

				<div
					className={` ${
						toRight && "box_col_left"
					}  box box_col box_col_right  w-full md:w-[600px]`}
				>
					<p className="tag_name link link_feature capitalize">
						{projectInfo.feature}
					</p>

					<h3 className="project_name header1 text-2xl">
						{projectInfo.name}
					</h3>

					<div className=" w-full md:w-[700px] z-10 p-4 bg-pri-1 ">
						<p className="body body2">
							{projectInfo.description}
						</p>
					</div>

					<div className="font-fira-code box text-xs md:text-lg space-x-3 md:space-x-6 text-pri-3">
						{projectInfo.tools.map(
							(item: string, index: number) => (
								<p className="tag" key={index}>
									{item}
								</p>
							)
						)}
					</div>

					<div className="box">


						<div className="box_icon">
							<svg
								stroke="#716f8a"
								fill="#716f8a"
								stroke-width="0"
								viewBox="0 0 16 16"
								height="1.3em"
								width="1.3em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
							</svg>
						</div>



						<Link href={projectInfo.live}>
						<div className="box_icon cursor-pointer">
							<svg
								stroke="##716f8a"
								fill="#716f8a"
								stroke-width="0"
								viewBox="0 0 20 20"
								height="1.3em"
								width="1.3em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
								<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
							</svg>
						</div>
												</Link>
					</div>
				</div>
			</div>
		</CardLayout>
	);
};

export default Projects;
