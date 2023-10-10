import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { CurrentPageIndex } from "../Types/Types";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import useUpdateCurrentPage from "../Utils/CustomHooks/useUpdateCurrentPage";

type SectionWrapperProps = {
   nameForNavigation: string;
   index: CurrentPageIndex;
   sx?: any;
   children: React.ReactNode;
   useSnap?: boolean;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
   index,
   sx,
   children,
   useSnap = false,
}) => {
   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
   });

   useEffect(() => {
      if (!useSnap) return;
      if (isIntersecting) {
         const targetY =
            ref.current.getBoundingClientRect().top + window.pageYOffset;
         window.scroll({
            top: targetY,
            behavior: "smooth",
         });
      }
   }, [isIntersecting, ref, useSnap]);

   useUpdateCurrentPage(ref, index);

   return (
      // <Element name={nameForNavigation}>
      <Box
         ref={ref}
         sx={{
            ...sx,
            width: "100%",
            minHeight: "100vh",
            //  minHeight: "30rem",
            //  scrollSnapAlign: "start",
            //  scrollSnapStop: "always",
            position: "relative",
         }}
      >
         {children}
      </Box>
      // </Element>
   );
};

export default SectionWrapper;
