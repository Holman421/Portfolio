import React, { Ref } from "react";
import { Box, BoxProps } from "@mui/material";
import { Element } from "react-scroll";
import TextWrapper from "../Components/TextWrapper";
import SectionWrapper from "../Components/SectionWrapper";

const ProjectSection: React.FC = () => {
   return (
      <SectionWrapper
         nameForNavigation="#projects"
         index={1}
         sx={{ paddingTop: "5rem", display: "flex" }}
      >
         <Box
            sx={{
               textAlign: "center",
               fontSize: "3rem",
               marginBottom: "4rem",
            }}
         >
            Projects
         </Box>
         <Box
            sx={{
               display: "grid",
               gridTemplateRows: "1fr 1fr",
               gridTemplateColumns: "20rem 20rem",
               gap: "16px",
               justifyItems: "center",
            }}
         >
            <TextWrapper
               sx={{
                  width: "20rem",
                  height: "10rem",
                  textAlign: "center",
               }}
            >
               Project 1
            </TextWrapper>
            <TextWrapper
               sx={{
                  width: "20rem",
                  height: "10rem",
                  textAlign: "center",
               }}
            >
               Project 2
            </TextWrapper>
            <TextWrapper
               sx={{
                  width: "20rem",
                  height: "10rem",
                  textAlign: "center",
               }}
            >
               Project 3
            </TextWrapper>
            <TextWrapper
               sx={{
                  width: "20rem",
                  height: "10rem",
                  textAlign: "center",
               }}
            >
               Project 4
            </TextWrapper>
         </Box>
      </SectionWrapper>
   );
};

export default ProjectSection;
