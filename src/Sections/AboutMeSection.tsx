import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SectionWrapper from "../Components/SectionWrapper";
import AvatarContainer from "../Components/AboutMe&SkillsSection/AvatarContainer";
import AboutMeInfoContainer from "../Components/AboutMe&SkillsSection/AboutMeInfoContainer";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";

export type SelectedMode = "aboutMe" | "skills";

const AboutMeSection: React.FC = () => {
   //  const [selectedMode, setSelectedMode] = useState<SelectedMode>("aboutMe");
   const aboutMeHeading = useSelectAppropriateText("About me", "Já");
   const skillsHeading = useSelectAppropriateText("Skills", "Dovednosti");

   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
   });

   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={2}
         sx={{
            position: "relative",
         }}
         useSnap={true}
      >
         <Box
            sx={{
               fontSize: "3rem",
               textAlign: "center",
               paddingTop: "2%",
            }}
         >
            {aboutMeHeading}
         </Box>
         <Box sx={{ position: "absolute", top: "50%" }} ref={ref}></Box>
         <AvatarContainer isIntersecting={isIntersecting} />
      </SectionWrapper>
   );
};

export default AboutMeSection;
