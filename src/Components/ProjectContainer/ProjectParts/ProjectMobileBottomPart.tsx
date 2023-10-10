import { Box } from "@mui/material";
import React from "react";
import useSelectAppropriateText from "../../../Utils/CustomHooks/useSelectAppropriateText";
import { breakpointLower800px } from "../../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../../Utils/HelperFunctions/createClipPath";

type ProjectMobileBottomPartProps = {
   technologies: string;
   description: string;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectMobileBottomPart: React.FC<ProjectMobileBottomPartProps> = ({
   technologies,
   description,
   isOpen,
   setIsOpen,
}) => {
   const { clipPathOutside, clipPathInside } = createClipPath<8>(
      [
         { x: "0%", y: "0%" },
         { x: "0% + 5.9rem", y: "0%" },
         { x: "0% + 6.9rem", y: "0% + 1rem" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 1rem", y: "100%" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "" },
      ]
   );
   const transition = "all 500ms ease";
   const moreText = useSelectAppropriateText("More...", "Více...");
   const descriptionText = useSelectAppropriateText("Description", "Popis");

   return (
      <Box
         sx={{
            ...breakpointLower800px({
               display: "block",
               width: "15rem",
            }),
            width: "16rem",
            display: "none",
            maxHeight: isOpen ? "30rem" : "3rem",
            position: "relative",
            top: "-.7rem",
            left: "1rem",
            background: "#CF6C29",
            clipPath: clipPathOutside,
            cursor: isOpen ? "" : "pointer",
            transition: transition,
            // transform: "perspective(600px) rotate3d(1, 0, 0, 30deg)",
            // transformOrigin: "bottom",
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(0deg, #ce6c29 0%, #512b10 100%)",
               width: "100%",
               left: "0",
               height: "100%",
               clipPath: clipPathInside,
               zIndex: "20",
            },
         }}
         onClick={() => {
            isOpen || setIsOpen(!isOpen);
         }}
      >
         <Box
            sx={{
               opacity: isOpen ? "1" : "0",
               zIndex: "50",
               position: "relative",
               top: "4rem",
               left: "1.5rem",
               fontFamily: "'Open Sans', sans-serif",
               fontSize: ".8rem",
               width: "13rem",
               transition: `${transition}, ${
                  isOpen ? "opacity 500ms ease 300ms" : "opacity 0s ease"
               }`,
               paddingBottom: "8rem",
            }}
         >
            {description}
         </Box>
         <Box
            sx={{
               zIndex: "50",
               position: "absolute",
               top: isOpen ? "1.8rem" : ".6rem",
               left: "1.5rem",

               fontSize: isOpen ? "1.3rem" : "1.3rem",
               opacity: isOpen ? "1" : ".7",
               transition: `${transition}, translateY 100ms ease`,
            }}
         >
            {isOpen ? descriptionText : moreText}
         </Box>
         <Box
            sx={{
               opacity: isOpen ? "1" : "0",
               zIndex: "50",
               position: "absolute",
               left: "1.5rem",
               bottom: ".75rem",
               // whiteSpace: "nowrap",
               // transition: transition,
               fontSize: ".8rem",
               transition: `${transition}, ${
                  isOpen ? "opacity 500ms ease 300ms" : "opacity 0s ease"
               }`,
            }}
         >
            {technologies}
         </Box>
         <Box
            sx={{
               position: "absolute",
               opacity: isOpen ? ".4" : "0",
               visibility: isOpen ? "visible" : "hidden",
               transition: "all 300ms ease",
               width: "1.2rem",
               height: "1.2rem",
               zIndex: "100",
               top: "1.7rem",
               right: "1rem",
               cursor: "pointer",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background: "black",
                  width: ".15rem",
                  height: "1rem",
                  transform: "rotate(45deg)",
                  top: "10%",
                  left: "50%",
                  transformOrigin: "center",
                  zIndex: "20",
               },
               "&::after": {
                  content: '""',
                  position: "absolute",
                  background: "black",
                  width: ".15rem",
                  height: "1rem",
                  transform: "rotate(-45deg) ",
                  transformOrigin: "center",
                  top: "10%",
                  left: "50%",
                  zIndex: "20",
               },
            }}
            onClick={() => {
               setIsOpen(!isOpen);
            }}
         />
      </Box>
   );
};

export default ProjectMobileBottomPart;
