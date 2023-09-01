import React from "react";
import { Box, Typography } from "@mui/material";
import { Element } from "react-scroll";
import TestThree from "../Components/AvatarModel";
import TextWrapper from "../Components/TextWrapper";

const AboutMeSection = () => {
   return (
      <Element name="#aboutMe">
         <Box
            sx={{
               width: "100%",
               position: "relative",
            }}
         >
            <Box
               sx={{
                  fontSize: "3rem",
                  textAlign: "center",
                  marginTop: "10rem",
               }}
            >
               About me
            </Box>
            <TextWrapper
               sx={{
                  position: "absolute",
                  top: "7rem",
                  left: "50%",
                  transform: "translateX(-50%)",
               }}
            >
               LVL: 24
            </TextWrapper>
            <TextWrapper
               sx={{ position: "absolute", top: "12rem", left: "18rem" }}
            >
               Name: Aleš Holman
            </TextWrapper>
            <TextWrapper
               sx={{ position: "absolute", top: "29rem", left: "9rem" }}
            >
               <Box>Location:</Box>
               <Box>Prague in Czech Republic</Box>
            </TextWrapper>
            <TextWrapper
               sx={{ position: "absolute", top: "20rem", left: "6rem" }}
            >
               <Box>
                  <Box>Skills:</Box>
                  <Box>Typescript, React, Next.JS, Jest, CSS</Box>
               </Box>
            </TextWrapper>
            <TextWrapper
               sx={{ position: "absolute", top: "29rem", right: "9rem" }}
            >
               <Box>Hobbies:</Box>
               <Box>Coding, gym, gaming, watching films</Box>
            </TextWrapper>
            <TextWrapper
               sx={{
                  position: "absolute",
                  width: "24rem",
                  top: "11rem",
                  right: "6rem",
                  fontFamily: "Orbitron",
               }}
            >
               <Box>Description:</Box>
               <Box>
                  I'm a frontend developer based in Prague who specializes in
                  React. I'm passionate about all things frontend development
                  and love working on projects that challenge me to create
                  beautiful, responsive, and user-friendly websites.
               </Box>
            </TextWrapper>
            <Box
               sx={{
                  margin: "7rem 0 5rem 0",
                  height: "30vw",
                  minHeight: "20rem",
               }}
            >
               <TestThree />
            </Box>
         </Box>
      </Element>
   );
};

export default AboutMeSection;
