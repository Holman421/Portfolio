import React from "react";
import { Box, Button } from "@mui/material";
import TextWrapper from "../Components/TextWrapper";
import Header from "../Layout/Header";
import SectionWrapper from "../Components/SectionWrapper";
import NameLogo from "../Components/NameLogo";
import Line from "../Components/Line";

const HeroSection: React.FC = () => {
   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={0}
         sx={{ padding: "8rem 0 0 10rem", postition: "relative" }}
      >
         <Header />
         <NameLogo />
         <Line length="10rem" top="4.7rem" left="7.5rem" />
         <Line length="100rem" top="5.5rem" left="4.7rem" rotate="90" />

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
      </SectionWrapper>
   );
};

export default HeroSection;
