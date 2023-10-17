import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SectionWrapper from "../Components/SectionWrapper";
import AvatarContainer from "../Components/AvatarSection/AvatarContainer";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import { useDispatch, useSelector } from "react-redux";
import {
   setApplyFirstAppearTransition,
   setAreAboutMeTransitionsOn,
   setSelectedMode,
   setShowAboutMeContainers,
   setShowSkillsContainers,
} from "../Redux/reducers/avatarReducer";
import { StoreType } from "../Redux/store/store";
import { SelectedMode } from "../Types/Types";

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
   }, [isIntersecting]);

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
            <Box
               onClick={() => {
                  handleSwitchModes("aboutMe");
               }}
               component={"button"}
               sx={{
                  zIndex: "10000",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: selectedMode === "skills" ? "#CF6C29" : "#29C4CE",
                  padding: ".5rem 1rem",
               }}
            >
               About
            </Box>

            <Box
               onClick={() => {
                  handleSwitchModes("skills");
               }}
               component={"button"}
               sx={{
                  zIndex: "10000",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background:
                     selectedMode === "aboutMe" ? "#CF6C29" : "#29C4CE",
                  padding: ".5rem 1rem",
               }}
            >
               Skills
            </Box>
         </Box>
      </SectionWrapper>
   );
};

export default AvatarSection;
