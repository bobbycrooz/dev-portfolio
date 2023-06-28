// import router from "next/router";
import Link from "next/link";
import React from "react";
import NavbarLayout from "./style.js";

const Navbar = ({ isMobile }: any) => {
  const [position, setPosition] = React.useState(0);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  // console.log();

  console.log(position, "current position is");

  type sectionType = "project" | "about" | "services" | "contact";

  function goToSection(section: sectionType) {
    const Section = document.getElementById(section);
    Section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  function getScroll() {
    const winScroll = window.pageYOffset;

    setPosition(winScroll);
  }

  React.useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", getScroll, true);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener("scroll", getScroll, true);
      }
    };
  });

  return (
    <NavbarLayout className=" h-20 shadow-md z-10 bg-white  flex px-4 md:px-48 ">
      <div className="box box_sb  w-full">
        {!showMobileMenu && (
          <h1 className="link link_logo ">{isMobile ? "<bd/>" : "<bobbydev/>"}</h1>
        )}

        {showMobileMenu && (
          <div className="mobile_menu flex  text- space-x-4 text-pri-3 fadeIn">
            <Link href="/">
              <p className="">Home</p>
            </Link>

            <button onClick={() => goToSection("services")}>
              <p className="">Services</p>
            </button>

            <button onClick={() => goToSection("project")}>
              <p className="">Projects</p>
            </button>

            <button onClick={() => goToSection("contact")}>
              <p className="">contact</p>
            </button>
          </div>
        )}

        <div className="box ml-5  box_3 box_sb ">
          {!isMobile ? (
            <div className="box box_nav  ">
              <Link href="/">
                <p className="link link_nav">Home</p>
              </Link>

              <button onClick={() => goToSection("services")}>
                <p className="link link_nav">Services</p>
              </button>

              <button onClick={() => goToSection("project")}>
                <p className="link link_nav">Projects</p>
              </button>

              <button onClick={() => goToSection("contact")}>
                <p className="link link_nav">contact</p>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowMobileMenu((p) => !p)}
              className="hambuger cursor-pointer transition-all  w-10 h-10 space-y-1 flex flex-col justify-center items-end p-2"
            >
              <span
                className={`${
                  showMobileMenu ? "w-3" : "w-6"
                } h-1 bg-pri-3 rounded-sm block`}
              ></span>
              <span
                className={`${
                  showMobileMenu ? "w-4" : "w-4"
                } h-1 bg-pri-3 rounded-sm block`}
              ></span>
              <span
                className={`${
                  showMobileMenu ? "w-6" : "w-3"
                } h-1 bg-pri-3 rounded-sm block`}
              ></span>
            </button>
          )}

          {/* <div className="box_icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
            </svg>
          </div> */}
        </div>
      </div>

      {position > 100 && (
        <div className="floating-nav fixed top-8 left-[50%] translate-x-[-50%] fadeIn">
         {
          isMobile ? (
            <div className="box box_nav font-joe text-pri-main space-x-6 p-4 px-6 ">
            <Link href="/">
              <p className="">Home</p>
            </Link>

            <button onClick={() => goToSection("services")}>
              <p className="">Services</p>
            </button>

            <button onClick={() => goToSection("project")}>
              <p className="">Projects</p>
            </button>

            <button onClick={() => goToSection("contact")}>
              <p className="">contact</p>
            </button>
          </div>
          ) : (
            <div className="box box_nav  ">
            <Link href="/">
              <p className="link link_nav">Home</p>
            </Link>

            <button onClick={() => goToSection("services")}>
              <p className="link link_nav">Services</p>
            </button>

            <button onClick={() => goToSection("project")}>
              <p className="link link_nav">Projects</p>
            </button>

            <button onClick={() => goToSection("contact")}>
              <p className="link link_nav">contact</p>
            </button>
          </div>
          )
         }
        </div>
      )}
    </NavbarLayout>
  );
};

export default Navbar;
