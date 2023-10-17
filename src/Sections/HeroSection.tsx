import React from "react";
import { Box } from "@mui/material";
import SectionWrapper from "../Components/SectionWrapper";
import DescriptionContainer from "../Components/HeroSection/DescriptionContainer";
import ContactMeButton from "../Components/HeroSection/ContactMeButton";
import AbstractDescBars from "../Components/AbstractDescBars";
import HeadingContainer from "../Components/HeroSection/HeadingContainer";
import NameLogo from "../Components/NameLogo";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import { breakpointUp1300px } from "../Utils/HelperFunctions/breakpoints";

const HeroSection: React.FC = () => {
   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={0}
         sx={{
            background:
               "radial-gradient(68.7% 37.25% at 74.93% 53.56%, rgba(207, 108, 41, 0.24) 0%, rgba(0, 0, 0, 0.00) 100%)",
         }}
         // background:
         //  "radial-gradient(68.23% 33.26% at 86.15% 84.28%, rgba(207, 108, 41, 0.35) 0%, rgba(0, 0, 0, 0.00) 100%)",
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

         <Box
            ref={ref}
            sx={{
               position: "absolute",
               top: "50%",
               left: "calc(50% + 4rem)",
               transform: "translateX(-50%)",
               transition: "all 600ms ease",
               ...breakpointUp1300px({ left: "calc(50% + 4rem)" }),
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  right: "-1rem",
                  top: "-2rem",
                  transition: "all 600ms ease",
                  ...breakpointUp1300px({ top: "1.15rem", right: "-2rem" }),
               }}
            >
               <AbstractDescBars />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-.1rem",
                     left: "0rem",
                     width: isIntersecting ? "4rem" : "0",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                     transition: "all 300ms ease 1000ms",
                  }}
               />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-2.25rem",
                     left: "-2.1rem",
                     width: isIntersecting ? "3rem" : "0",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                     transform: "rotate(-45deg)",
                     transformOrigin: "left",
                     transition: "all 300ms ease 700ms",
                  }}
               />
            </Box>
            <Box
               sx={{
                  position: "absolute",
                  left: "-13rem",
                  top: "4.5rem",
                  transition: "all 600ms ease",
                  ...breakpointUp1300px({ top: "7.5rem", left: "-14rem" }),
               }}
            >
               <AbstractDescBars />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "-.1rem",
                     left: "0rem",
                     width: "4rem",
                     transform: isIntersecting ? "scaleX(1)" : "scaleX(0)",
                     transformOrigin: "right",
                     transition: "transform 300ms ease 1000ms",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                  }}
               />
               <Box
                  sx={{
                     position: "absolute",
                     bottom: "3.4rem",
                     right: "-3.5rem",
                     width: isIntersecting ? "5rem" : "0",
                     transition: "all 300ms ease 700ms",
                     height: ".5px",
                     backgroundColor: "#CF6C29",
                     transform: "rotate(-45deg)",
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
