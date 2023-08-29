import React from "react";
import { Box } from "@mui/material";
import Me from "../../Assets/Me.png";
import { Element } from "react-scroll";

const AboutMeSection = () => {
   return (
      <Element name="#aboutMe">
         <Box sx={{ width: "100%", border: "1px solid white" }}>
            <Box sx={{ margin: "2rem 0rem 2rem 8rem" }}>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     width: "5rem",
                  }}
               >
                  <img src={Me} style={{ maxWidth: "100%", height: "auto" }} />
               </Box>
            </Box>
         </Box>
         <Box></Box>
      </Element>
   );
};

export default AboutMeSection;
