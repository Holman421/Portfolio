import React from "react";
import { Box, Button } from "@mui/material";
import { Element } from "react-scroll";
import LoadingBar from "../Components/LoadingBar";
import TextWrapper from "../Components/TextWrapper";

const HeroSection = () => {
   return (
      <Element name="#hero">
         <Box sx={{ minHeight: "70vh", position: "relative" }}>
            <Box sx={{ margin: "8rem 0 0 8rem" }}>
               <TextWrapper>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                     <Box sx={{ display: "inline-block" }}>Hey, my name is</Box>
                     <Box sx={{ fontSize: "3rem", display: "inline-block" }}>
                        Ales Holman
                     </Box>
                  </Box>
               </TextWrapper>
               <Box
                  sx={{
                     maxWidth: "33rem",
                     lineHeight: "1.5rem",
                     margin: "3rem 0 0 5rem",
                  }}
               >
                  <TextWrapper>
                     I'm a skilled front-end developer specializing in React.js.
                  </TextWrapper>
                  {/* <Box sx={{ display: "flex" }}>
                     <Button>Projects</Button>
                     <Button>About me</Button>
                  </Box> */}
               </Box>
            </Box>
         </Box>
      </Element>
   );
};

export default HeroSection;
