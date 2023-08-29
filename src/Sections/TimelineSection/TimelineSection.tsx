import { Box } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";

const TimelineSection = () => {
   return (
      <Element name="#timeline">
         <Box sx={{ width: "100%", border: "1px solid white" }}>
            <Box sx={{ margin: "2rem 0rem 2rem 8rem" }}>Timeline section</Box>
         </Box>
      </Element>
   );
};

export default TimelineSection;
