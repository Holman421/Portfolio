import React from "react";
import { Box } from "@mui/material";
import SectionWrapper from "../Components/SectionWrapper";
import DescriptionContainer from "../Components/HeroSection/DescriptionContainer";
import ContactMeButton from "../Components/HeroSection/ContactMeButton";
import AbstractDescBars from "../Components/AbstractDescBars";
import HeadingContainer from "../Components/HeroSection/HeadingContainer";
import Header from "../Layout/Header";
import NameLogo from "../Components/NameLogo";
import Line from "../Components/Vectors/Line";

const HeroSection: React.FC = () => {
   return (
      <SectionWrapper nameForNavigation="#hero" index={0}>
         {/* <Header /> */}
         <NameLogo />
         {/* <Line length="80%" top="4.7rem" left="8.5rem" thickness="4px" /> */}

         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "calc(50% + 7rem)",
               transform: "translateX(-50%)",
            }}
         >
            <Box sx={{ position: "absolute", right: "-1rem", top: "-2rem" }}>
               <AbstractDescBars />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-.1rem",
                     left: "0rem",
                     width: "4rem",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                  }}
               />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-.1rem",
                     left: "0rem",
                     width: "3rem",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                     transform: "rotate(135deg)",
                     transformOrigin: "left",
                  }}
               />
            </Box>
            <Box sx={{ position: "absolute", left: "-13rem", top: "4.5rem" }}>
               <AbstractDescBars />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-.1rem",
                     left: "0rem",
                     width: "4rem",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                  }}
               />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-.1rem",
                     right: "0rem",
                     width: "5rem",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                     transform: "rotate(135deg)",
                     transformOrigin: "right",
                  }}
               />
            </Box>
            <HeadingContainer />
            <DescriptionContainer />
            <ContactMeButton />
         </Box>
      </SectionWrapper>
   );
};

export default HeroSection;
