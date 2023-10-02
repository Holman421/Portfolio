import HeroSection from "./Sections/HeroSection";
import ProjectSection from "./Sections/ProjectSection";
import AboutMeSection from "./Sections/AboutMeSection";
import { Box } from "@mui/material";
import ContactMeSection from "./Sections/ContactMeSection";
import CurrentPageIndicator from "./Components/CurrentPageIndicator";

function App() {
   return (
      <Box
         sx={{
            minHeight: "100vh",
            maxWidth: "100vw",
            backgroundColor: "black",
            position: "relative",
         }}
      >
         <CurrentPageIndicator />
         <HeroSection />
         <ProjectSection />
         <AboutMeSection />
         <ContactMeSection />
      </Box>
   );
}

export default App;
