import { Box } from "@mui/material";
import React from "react";
import SectionWrapper from "../Components/SectionWrapper";

const ContactMeSection: React.FC = () => {
   return (
      <SectionWrapper nameForNavigation="#hero" index={4}>
         <Box sx={{ margin: "2rem 0rem 2rem 8rem" }}>Contact me</Box>
      </SectionWrapper>
   );
};

export default ContactMeSection;
