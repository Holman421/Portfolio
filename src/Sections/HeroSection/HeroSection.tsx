import React from "react";
import { Box } from "@mui/material";
import { Element } from "react-scroll";

const HeroSection = () => {
   return (
      <Element name="#hero">
         <Box sx={{ minHeight: "100vh", position: "relative" }}>
            <Box sx={{ margin: "8rem 0 0 8rem" }}>
               <Box>Hey, my name is</Box>
               <Box sx={{ fontSize: "3rem" }}>Ales Holman</Box>
               <Box
                  sx={{
                     maxWidth: "31rem",
                     lineHeight: "1.5rem",
                     marginTop: "1rem",
                  }}
               >
                  I'm a skilled front-end developer specializing in React.js. I
                  strive to create engaging and intuitive user experiences
                  through clean, efficient code and a passion for innovation.
               </Box>
            </Box>
         </Box>
      </Element>
   );
};

export default HeroSection;
