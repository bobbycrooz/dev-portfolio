import { useEffect } from "react";
import { resizer } from "../utils/resizer";



export const useResizer = (
  setIsMobile: (value: boolean) => void,
  setClientWidth: (value: number) => void
) => {
    
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener(
        "resize",
        () => resizer(setIsMobile, setClientWidth),
        true
      );
      setIsMobile((document?.body?.clientWidth || 0) < 800);
      setClientWidth(document?.body?.clientWidth);
    }

    return () => {
      if (typeof window !== undefined) {
        window.removeEventListener(
          "resize",
          () => resizer(setIsMobile, setClientWidth),
          true
        );
      }
    };
  }, []);


};