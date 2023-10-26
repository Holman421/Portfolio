import React from "react";
import { Box } from "@mui/material";
import SectionWrapper from "../Components/SectionWrapper";
import DescriptionContainer from "../Components/HeroSection/DescriptionContainer";
import ContactMeButton from "../Components/HeroSection/ContactMeButton";
import HeadingContainer from "../Components/HeroSection/HeadingContainer";
import NameLogo from "../Components/NameLogo";
import {
   breakpointLower650px,
   breakpointUp1300px,
} from "../Utils/HelperFunctions/breakpoints";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const HeroSection: React.FC = () => {
   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={0}
         sx={{
            // background:
            //    "radial-gradient(68.7% 37.25% at 74.93% 53.56%, rgba(207, 108, 41, 0.24) 0%, rgba(0, 0, 0, 0.00) 100%)",
            background:
               "radial-gradient(49.64% 42.91% at 36.89% 52%, rgba(60, 149, 220, 0.23) 0%, rgba(0, 0, 0, 0.00) 100%)",
         }}
      >
         <NameLogo />
         {/* <Navbar />
         <Line
            color="#29C4CE"
            length="80%"
            top="4.7rem"
            left="8.5rem"
            thickness="4px"
         /> */}

         <LanguageSwitcher />

         <Box
            sx={{
               position: "absolute",
               top: "30%",
               left: "calc(50%)",
               transform: "translateX(-50%)",
               transition: "all 600ms ease",
               ...breakpointLower650px({
                  left: "calc(50% - .5rem)",
               }),
               ...breakpointUp1300px({
                  top: "35%",
                  left: "calc(50% + 4rem)",
                  transform: "translateX(-50%) scale(1.3)",
               }),
            }}
         >
            <HeadingContainer />
            <DescriptionContainer />
            <ContactMeButton />
         </Box>
      </SectionWrapper>
   );
};

export default HeroSection;
