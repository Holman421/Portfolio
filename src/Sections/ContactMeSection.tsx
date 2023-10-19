import { Box } from "@mui/material";
import React from "react";
import SkillContainer from "../Components/AvatarSection/SkillContainer";
import Chatbot from "../Components/Chatbot/Chatbot";
import SectionWrapper from "../Components/SectionWrapper";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";
import { createClipPath } from "../Utils/HelperFunctions/createClipPath";

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

   const { clipPathOutside, clipPathInside } = createClipPath<8>(
      [
         { x: "0%", y: "0% + .5rem" },
         { x: "0% + .5rem", y: "0%" },
         { x: "100% - .5rem", y: "0%" },
         { x: "100%", y: "0% + .5rem" },
         { x: "100%", y: "100% - .5rem" },
         { x: "100% - .5rem", y: "100%" },
         { x: "0% + .5rem", y: "100%" },
         { x: "0%", y: "100% - .5rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
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
               background: "#CF6C29",
               width: isIntersecting ? "30%" : "6rem",
               transition:
                  "right 500ms ease, width 500ms ease 500ms, height 500ms ease 1000ms",
               transform: "translateX(50%)",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               clipPath: clipPathOutside,
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background: "linear-gradient(180deg, #ce6c29 0%, #512b10 100%)",
                  width: "100%",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
               },
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
