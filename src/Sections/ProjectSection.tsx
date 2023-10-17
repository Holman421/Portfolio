import { Box } from "@mui/material";
import ProjectContainer from "../Components/ProjectContainer/ProjectContainer";
import SectionWrapper from "../Components/SectionWrapper";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";

const ProjectSection: React.FC = () => {
   const projectHeading = useSelectAppropriateText("Projects", "Projekty");

   return (
      <SectionWrapper
         nameForNavigation="#projects"
         index={1}
         sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // "@media (max-width: 750px)": {
            // },
            background:
               "radial-gradient(49.64% 42.91% at 36.89% 52%, rgba(60, 149, 220, 0.23) 0%, rgba(0, 0, 0, 0.00) 100%)",
         }}
      >
         <Box
            sx={{
               textAlign: "center",
               fontSize: "3rem",
               paddingTop: "2rem",
            }}
         >
            {projectHeading}
         </Box>

         <ProjectContainer
            projectName="Creature forge"
            projectNumber="01"
            technologies="React.js - Typescript - MUI - OpenAI API"
            description="Creature Forge is a web app that creates AI-generated pictures of custom fantasy creatures. The user-friendly interface offers various options to create unique features. Once the creature is created, high-quality images can be downloaded and shared."
            delay={50}
            left="calc(-30% + 15rem)"
            marginTop="4rem"
         />
         <ProjectContainer
            projectName="Chaos Canvas"
            projectNumber="02"
            technologies="React.js - Typescript - MUI - Responsivness"
            description="Chaos Canvas is an interactive platform that allows users to generate random shapes and create unique landscapes. With various settings, users can customize the size and color of elements, as well as adjust the canvas size. Once complete, users can download their final picture."
            delay={250}
            left="calc(30% - 15rem)"
            marginTop="4rem"
            marginBottom="8rem"
         />
      </SectionWrapper>
   );
};

export default ProjectSection;
