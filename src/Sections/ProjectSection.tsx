import { Box } from "@mui/material";
import ProjectContainer from "../Components/ProjectContainer/ProjectContainer";
import SectionWrapper from "../Components/SectionWrapper";

const ProjectSection: React.FC = () => {
   return (
      <SectionWrapper
         nameForNavigation="#projects"
         index={1}
      >
         <Box
            sx={{
               textAlign: "center",
               fontSize: "3rem",
               paddingTop: "3%",
            }}
         >
            Projects
         </Box>
         <Box
            sx={{
               position: "absolute",
               top: "25%",
               left: "15%",
               //  transform: "translateY(-50%)",
            }}
         >
            <ProjectContainer
               projectName="Creature forge"
               projectNumber="01"
               technologies="React.js - Typescript - MUI - OpenAI API"
               description="Creature Forge is a web app that creates AI-generated pictures of custom fantasy creatures. The user-friendly interface offers various options to create unique features. Once the creature is created, high-quality images can be downloaded and shared."
            />
         </Box>
         <Box
            sx={{
               position: "absolute",
               top: "60%",
               left: "30%",
               //  transform: "translate(-50%, -50%)",
            }}
         >
            <ProjectContainer
               projectName="Chaos Canvas"
               projectNumber="02"
               technologies="React.js - Typescript - MUI - Responsivness"
               description="Chaos Canvas is an interactive platform that allows users to generate random shapes and create unique landscapes. With various settings, users can customize the size and color of elements, as well as adjust the canvas size. Once complete, users can download their final picture."
            />
         </Box>
      </SectionWrapper>
   );
};

export default ProjectSection;
