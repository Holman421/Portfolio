import { Box } from "@mui/material";
import React from "react";
import SkillContainer from "../Components/AvatarSection/SkillContainer";
import Chatbot from "../Components/Chatbot/Chatbot";
import SectionWrapper from "../Components/SectionWrapper";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";

const ContactMeSection: React.FC = () => {
   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const contactMeHeading = useSelectAppropriateText(
      "Contact me",
      "Kontaktuj mě"
   );

   return (
      <SectionWrapper
         nameForNavigation="#hero"
         index={3}
         sx={{ marginTop: "7rem" }}
      >
         <Box
            sx={{
               fontSize: "3rem",
               textAlign: "center",
               paddingTop: "1.5%",
            }}
         >
            {contactMeHeading}
         </Box>
         {/* {isIntersecting && ( */}
         <Box
            sx={{
               marginTop: "2rem",
               position: "absolute",
               right: isIntersecting ? "50%" : "1.5rem",
               height: isIntersecting ? "30%" : "3rem",
               padding: "1rem",
               background: "red",
               width: isIntersecting ? "30%" : "6rem",
               transition:
                  "right 500ms ease, width 500ms ease 500ms, height 500ms ease 1000ms",
               transform: "translateX(50%)",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            Chatbot
         </Box>
         <Box ref={ref} sx={{ marginTop: "2rem" }}>
            <Chatbot isIntersecting={isIntersecting} />
         </Box>
      </SectionWrapper>
   );
};

export default ContactMeSection;
