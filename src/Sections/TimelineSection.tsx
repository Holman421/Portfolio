import { Box } from "@mui/material";
import React from "react";
import SectionWrapper from "../Components/SectionWrapper";

const TimelineSection: React.FC = () => {
   return (
      <SectionWrapper nameForNavigation="#hero" index={3}>
         <Box sx={{ margin: "2rem 0rem 2rem 8rem" }}>Timeline section</Box>
      </SectionWrapper>
   );
};

export default TimelineSection;
