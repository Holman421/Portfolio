import React from "react";
import { Box } from "@mui/material";
import { Element } from "react-scroll";
import TextWrapper from "../Components/TextWrapper";

const ProjectSection = () => {
   return (
      <Element name="#projects">
         <Box
            sx={{
               width: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
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
                  sx={{ width: "20rem", height: "10rem", textAlign: "center" }}
               >
                  Project 1
               </TextWrapper>
               <TextWrapper
                  sx={{ width: "20rem", height: "10rem", textAlign: "center" }}
               >
                  Project 2
               </TextWrapper>
               <TextWrapper
                  sx={{ width: "20rem", height: "10rem", textAlign: "center" }}
               >
                  Project 3
               </TextWrapper>
               <TextWrapper
                  sx={{ width: "20rem", height: "10rem", textAlign: "center" }}
               >
                  Project 4
               </TextWrapper>
            </Box>
         </Box>
      </Element>
   );
};

export default ProjectSection;
