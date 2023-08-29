import React from "react";
import { Box } from "@mui/material";
import { Element } from "react-scroll";

const ProjectSection = () => {
   return (
      <Element name="#projects">
         <Box sx={{ width: "100%", border: "1px solid white" }}>
            <Box sx={{ margin: "2rem 0rem 2rem 8rem" }}>Projects section</Box>
         </Box>
      </Element>
   );
};

export default ProjectSection;
