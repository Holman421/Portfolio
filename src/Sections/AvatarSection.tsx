import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SectionWrapper from "../Components/SectionWrapper";
import AvatarContainer from "../Components/AvatarSection/AvatarContainer";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import { useDispatch, useSelector } from "react-redux";
import {
   setApplyFirstAppearTransition,
   setSelectedMode,
   setShowAboutMeContainers,
   setShowSkillsContainers,
} from "../Redux/reducers/avatarReducer";
import { StoreType } from "../Redux/store/store";
import { SelectedMode } from "../Types/Types";
import AvatarSectionButton from "./AvatarSectionButton";

const AvatarSection: React.FC = () => {
   const { selectedMode } = useSelector(
      (state: StoreType) => state.avatarState
   );

   const aboutMeHeading = useSelectAppropriateText("About me", "Já");
   const skillsHeading = useSelectAppropriateText("Skills", "Dovednosti");

   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
   });

   const dispatch = useDispatch();

   useEffect(() => {
      if (isIntersecting) {
         setTimeout(() => {
            // dispatch(setAreAboutMeTransitionsOn(false));
            dispatch(setApplyFirstAppearTransition(false));
         }, 3000);
      }
   }, [isIntersecting, dispatch]);

   const handleSwitchModes = (mode: SelectedMode) => {
      if (selectedMode === mode) {
         return;
      }
      // dispatch(setAreAboutMeTransitionsOn(true));
      if (mode === "aboutMe") {
         dispatch(setShowAboutMeContainers(true));
         dispatch(setShowSkillsContainers(false));
      } else {
         dispatch(setShowAboutMeContainers(false));
         dispatch(setShowSkillsContainers(true));
      }
      dispatch(setSelectedMode(mode));

      setTimeout(() => {
         //  dispatch(setAreAboutMeTransitionsOn(false));
      }, 4000);
   };

   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={2}
         sx={{
            position: "relative",
            background:
               "radial-gradient(68.7% 37.25% at 74.93% 53.56%, rgba(207, 108, 41, 0.24) 0%, rgba(0, 0, 0, 0.00) 100%)",
         }}
         //  useSnap={true}
      >
         <Box
            sx={{
               fontSize: "3rem",
               textAlign: "center",
               paddingTop: "1.5%",
            }}
         >
            {selectedMode === "aboutMe" ? aboutMeHeading : skillsHeading}
         </Box>
         <Box sx={{ position: "absolute", top: "65%" }} ref={ref}></Box>
         <AvatarContainer isIntersecting={isIntersecting} />
         <Box
            sx={{
               position: "relative",
               marginTop: "1rem",
               width: "100%",
               display: "flex",
               justifyContent: "center",
               gap: "clamp(4.5rem, 10%, 10rem)",
            }}
         >
            <AvatarSectionButton
               handleSwitchModes={handleSwitchModes}
               isActive={selectedMode === "aboutMe"}
               name="About"
               handleSwitchModesArgument="aboutMe"
            />

            <AvatarSectionButton
               handleSwitchModes={handleSwitchModes}
               isActive={selectedMode === "skills"}
               name="Skills"
               handleSwitchModesArgument="skills"
            />
         </Box>
      </SectionWrapper>
   );
};

export default AvatarSection;
