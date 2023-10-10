import { Box } from "@mui/material";
import React from "react";
import useSelectAppropriateText from "../../../Utils/CustomHooks/useSelectAppropriateText";
import { breakpointLower800px } from "../../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../../Utils/HelperFunctions/createClipPath";

type ProjectRightPartProps = {
   technologies: string;
   description: string;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectRightPart: React.FC<ProjectRightPartProps> = ({
   technologies,
   description,
   isOpen,
   setIsOpen,
}) => {
   const { clipPathOutside, clipPathInside } = createClipPath<8>(
      [
         { x: "0%", y: "0% + 1rem" },
         { x: "0% + 1rem", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 2rem", y: "100%" },
         { x: "0% + 2rem", y: "0% + 3rem" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
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
               display: "none",
            }),
            width: isOpen ? "30rem" : "4rem",
            height: "11.1rem",
            position: "relative",
            top: "-1.1rem",
            left: "-1.7rem",
            background: "#CF6C29",
            clipPath: clipPathOutside,
            cursor: isOpen ? "" : "pointer",
            transition: transition,
            zIndex: "21",
            //  transform: "perspective(600px) rotate3d(1, 0, 0, 30deg)",
            //  transformOrigin: "bottom",
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(180deg, #ce6c29 0%, #512b10 100%)",
               width: "100%",
               left: "0",
               height: "100%",
               clipPath: clipPathInside,
               zIndex: "21",
            },
         }}
         onClick={() => {
            isOpen || setIsOpen(!isOpen);
         }}
      >
         <Box
            sx={{
               zIndex: "50",
               position: "absolute",
               top: isOpen ? "5%" : "45%",
               left: isOpen ? "2.75rem" : "1.5rem",
               transform: isOpen ? "" : "rotate(-90deg) translateY(-50%)",
               fontSize: isOpen ? "1.5rem" : "1.3rem",
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
               left: "2.75rem",
               bottom: ".75rem",
               whiteSpace: "nowrap",
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
               opacity: isOpen ? "1" : "0",
               zIndex: "50",
               position: "absolute",
               top: "2.75rem",
               left: "2.75rem",
               fontFamily: "'Open Sans', sans-serif",
               fontSize: ".8rem",
               width: "25rem",
               transition: `${transition}, ${
                  isOpen ? "opacity 500ms ease 300ms" : "opacity 0s ease"
               }`,
            }}
         >
            {description}
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
               top: "1rem",
               right: "1.2rem",
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

export default ProjectRightPart;
