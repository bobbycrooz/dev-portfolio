import React, { useEffect } from "react";
import gsap from "gsap";

const Home = () => {
  // const userState = useSelector((state: { auth: any }) => state.auth);
  const el = React.useRef(null);
  const q = gsap.utils.selector(el);

  // const [Class, setClass] = React.useState(true)

  // {x: 100}
  // boxRef.current
  // const el = useRef(null);
  // setInterval(() => {
  //   setClass(p => !p)
  // }, 5000)


  // Reaact comoponrnt to pass ref to children 
  const Box = React.forwardRef<HTMLDivElement, { children: string }>(
    ({ children }, ref) => (
      <div className={tw.box} ref={ref}>
        {children}
      </div>
    )
  );

  const BoxRef1 = React.useRef(null);
  const BoxRef2 = React.useRef(null);

  // React.useEffect(() => {
  //   const boxes = [BoxRef1.current, BoxRef2.current];

  //   gsap.to(boxes, {
  //     x: 100,
  //     repeat: -1,
  //     repeatDelay: 1,
  //     yoyo: true,
  //   });
  // });

  React.useEffect(() => {
    gsap.to(q(".sample"), { rotation: "+=360" });
  }, []);

  React.useLayoutEffect(() => {},[])

  const onEnter = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2, x: 100 });
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, {
      backgroundColor: "#28a92b",
      scale: 1,
      rotation: "+=360",
    });
  };

  return (
    <>
      <div ref={el} className="mx-auto w-[90%] h-[100vh] border bg-red-300">
        <div onMouseEnter={onEnter} onMouseLeave={onLeave} className={tw.box}>
          box one
        </div>

        <Box>box two</Box>

        <Box ref={BoxRef2}>box four</Box>

        <div className={tw.box}>box three</div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

const tw = {
  box: `sample border rounded flex justify-center items-center my-11 shadow-md mx-auto bg-green-300 h-40 w-40 `,
};

export default Home;
