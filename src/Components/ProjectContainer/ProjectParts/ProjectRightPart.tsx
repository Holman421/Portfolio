import { Box, keyframes, Typography } from "@mui/material";
import React, { useState } from "react";
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

   return (
      <Box sx={{ position: "relative", display: "inline-block" }}>
         <Box
            sx={{
               width: isOpen ? "30rem" : "4rem",
               height: "11.1rem",
               position: "absolute",
               top: "-1.1rem",
               left: "-1.7rem",
               background: "#CF6C29",
               clipPath: clipPathOutside,
               cursor: isOpen ? "" : "pointer",
               transition: transition,
               //  transform: "perspective(600px) rotate3d(1, 0, 0, 30deg)",
               //  transformOrigin: "bottom",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #ce6c29 0%, #512b10 100%)",
                  width: "100%",
                  left: "0",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
               },
            }}
            onClick={() => {
               setIsOpen(!isOpen);
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
               {isOpen ? "Description" : "More..."}
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
         </Box>
      </Box>
   );
};

export default ProjectRightPart;
