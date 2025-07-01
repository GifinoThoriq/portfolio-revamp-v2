import { useEffect, useState } from "react";

export function useWindowWidth() {
  // const [windowWidth, setWindowWidth] = useState<number>(() => {
  //   if (typeof window !== "undefined") {
  //     return window.innerWidth;
  //   }
  //   return 0; // Default value during SSR
  // });

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);

  //   // Set on mount
  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return 1;
}