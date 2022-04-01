import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.scss";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  return (
    <div>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <ChakraProvider>
          <Component {...pageProps} key={router.route} />
        </ChakraProvider>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
