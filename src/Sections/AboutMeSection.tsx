import React, { useState } from "react";
import { Box } from "@mui/material";
import AvatarModel from "../Components/3dModels/AvatarModel";
import SectionWrapper from "../Components/SectionWrapper";
import AvatarContainer from "../Components/AboutMe&SkillsSection/AvatarContainer";
import AboutMeInfoContainer from "../Components/AboutMe&SkillsSection/AboutMeInfoContainer";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";

export type SelectedMode = "aboutMe" | "skills";

const AboutMeSection: React.FC = () => {
   const [selectedMode, setSelectedMode] = useState<SelectedMode>("aboutMe");

   const titleName = useSelectAppropriateText("Name", "Jméno");

   const titleLocation = useSelectAppropriateText("Location", "Lokace");
   const descriptionLocation = useSelectAppropriateText(
      "Prague in Czech Republic",
      "Praha, původem z Krkonoš"
   );

   const titleHobbies = useSelectAppropriateText("Hobbies", "Koníčky");
   const descriptionHobbies = useSelectAppropriateText(
      "Competetive ballroom dancing, gym and fitness, watching horror films, playing minecraft, listening to music such as Apashe and bbno$",
      "Závodní tancovaní, Posilovna a fitness, sledování filmů, obzvlášť hororů, hraní minecraftu, poslouchání hudby jako Apashe nebo bbno$"
   );

   const titleLevel = useSelectAppropriateText("Level", "Level");
   const descriptionLevel = useSelectAppropriateText(
      "8 months until lvl 25",
      "8 měsíců do 25 levelu"
   );

   const titleLanguages = useSelectAppropriateText("Languages", "Jazyky");
   const descriptionLanguages = useSelectAppropriateText(
      "Advanced english, native czech",
      "Pokročilá angličtina, rodilá češina"
   );

   const titleDescription = useSelectAppropriateText("Description", "Popis");
   const descriptionDescription = useSelectAppropriateText(
      "Passionate and motivated frontend developer with a proven record of delivering projects on time. He enjoys mentoring others and is always eager to learn new skills to keep up with the constantly evolving tech landscape.",
      ""
   );

   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={2}
         sx={{ position: "relative" }}
      >
         <Box
            sx={{
               fontSize: "2rem",
               textAlign: "center",
               paddingTop: "2%",
            }}
         >
            About
         </Box>
         <AvatarContainer />
         <AboutMeInfoContainer
            title={titleName}
            description="Aleš Holman"
            top="10%"
            left="10%"
         />
         <AboutMeInfoContainer
            title={titleLocation}
            description={descriptionLocation}
            top="40%"
            left="10%"
         />
         <AboutMeInfoContainer
            title={titleHobbies}
            description={descriptionHobbies}
            bottom="10%"
            left="10%"
         />
         <AboutMeInfoContainer
            title={titleLevel}
            description={descriptionLevel}
            top="10%"
            right="10%"
         />
         <AboutMeInfoContainer
            title={titleLanguages}
            description={descriptionLanguages}
            top="40%"
            right="10%"
         />
         <AboutMeInfoContainer
            title={titleDescription}
            description={descriptionDescription}
            bottom="10%"
            right="10%"
         />
      </SectionWrapper>
   );
};

export default AboutMeSection;
