import React from "react";
import Header from "./Layout/Header";
import HeroSection from "./Sections/HeroSection/HeroSection";
import ProjectSection from "./Sections/ProjectsSection/ProjectSection";
import AboutMeSection from "./Sections/AboutMeSection/AboutMeSection";
import { Box } from "@mui/material";
import { black } from "./Config/Colors";
import ContactMeSection from "./Sections/ContactMeSection/ContactMeSection";
import SkillsSection from "./Sections/SkillsSection.tsx/SkillsSection";
import TimelineSection from "./Sections/TimelineSection/TimelineSection";

function App() {
   return (
      <Box
         sx={{
            minHeight: "100vh",
            maxWidth: "100vw",
            backgroundColor: black,
            position: "relative",
         }}
      >
         <Header />
         <Box
            sx={{
               position: "absolute",
               paddig: "1rem",
               height: "200vh",
               width: "3.5rem",
               top: "0rem",
               left: "2rem",
               border: "1px solid white",
            }}
         />
         <HeroSection />
         <ProjectSection />
         <SkillsSection />
         <AboutMeSection />
         <TimelineSection />
         <ContactMeSection />
      </Box>
   );
}

export default App;
