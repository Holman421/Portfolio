import { Box } from "@mui/material";
import React, { useRef } from "react";
import { Element } from "react-scroll";
import { CurrentPageIndex } from "../Types/Types";
import useUpdateCurrentPage from "../Utils/CustomHooks/useUpdateCurrentPage";

type SectionWrapperProps = {
   nameForNavigation: string;
   index: CurrentPageIndex;
   sx?: any;
   children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
   nameForNavigation,
   index,
   sx,
   children,
}) => {
   const ref = useRef<HTMLDivElement>(null);

   useUpdateCurrentPage(ref, index);

   return (
      <Element name={nameForNavigation}>
         <Box
            ref={ref}
            sx={{
               ...sx,
               width: "100%",
               height: "100vh",
               minHeight: "30rem",
              //  border: "1px solid white",
               scrollSnapAlign: "start",
               scrollSnapStop: "always",
               position: "relative",
            }}
         >
            {children}
         </Box>
      </Element>
   );
};

export default SectionWrapper;
