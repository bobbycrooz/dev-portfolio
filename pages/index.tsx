import React, { useState } from "react";
import Head from "next/head";
// import { motion } from "framer-motion";
// import { Navigation } from "../components/Navigation/Navigation";
import useSwr from "swr";
import ReactGa from "react-ga";
import { Text } from "@chakra-ui/react";


interface indexProps {}

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const index: React.FC<indexProps> = ({}) => {
  const [speakerState, setSpeakerState] = useState("muted");
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const { data: reviews, error } = useSwr("/api/tweets", fetcher);

  if (error) console.log(error);

  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    ReactGa.initialize("UA-177100391-3");
    ReactGa.pageview(window.location.pathname + window.location.search);

    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.65,
      inertia: 0.3,
    });

    // // update locomotive scroll
    // window.addEventListener("load", () => {
    //   let image = document.querySelector("img");
    //   // @ts-ignore
    //   const isLoaded = image!.complete && image!.naturalHeight !== 0;
    //   lscroll.update();
    // });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

    // // header cursor
    // const cursor = document.querySelector(".cursor");
    // window.onmousemove = (e: any) => {
    //   cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    // };

    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Adeola Adeoti %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  // const handleSpeaker = () => {
  //   const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

  //   if (speakerState === "muted") {
  //     setSpeakerState("unmuted");
  //     audio.pause();
  //   } else {
  //     setSpeakerState("muted");
  //     audio.play();
  //   }
  // };

  // function toggleBodyScroll(isToggleOpen: boolean) {
  //   if (isToggleOpen === false) {
  //     setIsToggleOpen(true);
  //   } else if (isToggleOpen === true) {
  //     setIsToggleOpen(false);
  //   }
  // }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <link rel="icon" href="svg/favicon.ico" />
          <link href="https://orjiDev.xyz/" rel="canonical" />
          <meta name="theme-color" content="#10101A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
          />
          <title>Orji Joseph 🚀 &mdash; FullStack Developer</title>
          <meta
            name="description"
            content="I'm a self-taught FullStack Developer and turning ideas into real life products is my calling."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Orji Joseph 🚀 &mdash; FullStack Developer"
          />
          <meta property="og:url" content="https://OrjiDev.xyz/" />
          <meta property="og:image" content="webp/preview-image.png" />
          <meta
            property="og:description"
            content="I'm a self-taught FullStack Developer and turning ideas into real life products is my calling."
          />
          <meta
            name="twitter:title"
            content="Orji Joseph 🚀 &mdash; FullStack Developer"
          />
          <meta
            name="twitter:description"
            content="I'm a self-taught FullStack Developer and turning ideas into real life products is my calling."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://OrjiDev.xyz/" />
        </Head>

        <Text fontSize="xl" color="gray.900">
          {" "}
          welcome to devMarine, one crypto plartform
        </Text>
      </div>
    </>
  );
};

export default index;
