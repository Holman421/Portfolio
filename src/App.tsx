import React from "react";
import Header from "./Layout/Header";
import HeroSection from "./Sections/HeroSection";
import ProjectSection from "./Sections/ProjectSection";
import AboutMeSection from "./Sections/AboutMeSection";
import { Box } from "@mui/material";
import { black } from "./Config/Colors";
import ContactMeSection from "./Sections/ContactMeSection";
import TimelineSection from "./Sections/TimelineSection";

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

         <HeroSection />
         <ProjectSection />
         <AboutMeSection />
         <TimelineSection />
         <ContactMeSection />
      </Box>
   );
}

export default App;
