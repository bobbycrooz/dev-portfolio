import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../assets/styles/index.scss";
import { useResizer } from "../hooks/resizer";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}



function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [clientWidth, setClientWidth] = React.useState(0);

  // hooks

  useResizer(setIsMobile, setClientWidth);
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component
            {...pageProps}
            key={router.route}
            isMobile={isMobile}
            clientWidth={clientWidth}
            currentPath={router.pathname.trim()}
          />
    </AnimatePresence>
  );
}

export default MyApp;
