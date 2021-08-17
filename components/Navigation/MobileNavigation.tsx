import * as React from "react";
import { motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">WE COULD HOOK UP YOU KNOW</h4>
          <div className="navigation-top__left--links">
            <a href="https://github.com/wapsecure" rel="noopener" target="_blank">
              👾 GH
            </a>
            <a href="https://twitter.com/wapsecureonline" rel="noopener" target="_blank">
              🐦 TW
            </a>
            <a href="https://www.linkedin.com/in/wapsecure" rel="noopener" target="_blank">
              💼 LD
            </a>
            <a href="https://www.instagram.com/wappsecure" rel="noopener" target="_blank">
              📸 IN
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE A BUSINESS IDEA?</h4>
          <a
            href="mailto:writewapsecure@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://roqqu.com"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/roqqu.png" alt="roqqu" />
            <h2>
              Roqqu
              <br />
              Crypto Currency exchange market
            </h2>
          </a>
          <a
            href="https://reinashouse.com"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/reinashouse.png" alt="reinashouse" />
            <h2>Reinashouse
              <br />
              Multi-niche Blogging Platform
            </h2>
          </a>
          <a
            href="https://badmus.ng/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/badmus.jpg" alt="Badmus" />
            <h2>
              Badmus
              <br />
              Multi-purpose Inventory Management system
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
