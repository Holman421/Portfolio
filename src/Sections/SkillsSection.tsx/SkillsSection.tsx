import { Box } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";

const SkillsSection = () => {
   return (
      <Element name="#skills">
         <Box sx={{ width: "100%", border: "1px solid white" }}>
            <Box sx={{ margin: "2rem 0rem 2rem 8rem" }}>Skills section</Box>
         </Box>
      </Element>
   );
};

export default SkillsSection;
