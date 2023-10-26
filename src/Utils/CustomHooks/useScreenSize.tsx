import { useState, useEffect } from "react";

const useScreenSize = (
   breakpoint: number = 1300,
   mode: "above" | "bellow" = "above"
) => {
   const [isAbove1300, setIsAbove1300] = useState<boolean>(false);

   useEffect(() => {
      const handleResize = () => {
         if (mode === "above") {
            setIsAbove1300(window.innerWidth > breakpoint);
         } else {
            setIsAbove1300(window.innerWidth < breakpoint);
         }
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return isAbove1300;
};

export default useScreenSize;
