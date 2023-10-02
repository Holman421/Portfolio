import { Box, keyframes } from "@mui/material";
import React from "react";
import { createClipPath } from "../../../Utils/HelperFunctions/createClipPath";

type ProjectButtonsProps = {
   variant: "demo" | "github";
   urlDemo?: string;
   urlGithub?: string;
   isOpen: boolean;
};

const ProjectButtons: React.FC<ProjectButtonsProps> = ({
   variant,
   urlDemo,
   urlGithub,
   isOpen,
}) => {
   const isDemoButon = variant === "demo";
   const {
      clipPathOutside: clipPathOutsideDemo,
      clipPathInside: clipPathInsideDemo,
   } = createClipPath<5>(
      [
         { x: "0%", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100%" },
         { x: "0%", y: "100%" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const {
      clipPathOutside: clipPathOutsideGithub,
      clipPathInside: clipPathInsideGithub,
   } = createClipPath<6>(
      [
         { x: "0%", y: "0%" },
         { x: "100%", y: "0%" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 1rem", y: "100%" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "" },
      ]
   );

   const handleClick = () => {
      window.open(isDemoButon ? urlDemo : urlGithub, "_blank");
   };

   return (
      <Box
         component="button"
         onClick={handleClick}
         sx={{
            position: "absolute",
            bottom: isDemoButon ? "-1.5rem" : "-4rem",
            left: "1rem",
            padding: ".5rem 0rem",
            width: "6.8rem",
            cursor: "pointer",
            border: "none",
            background: "#CF6C29",
            visibility: isOpen ? "visible" : "hidden",
            opacity: isOpen ? "1" : "0",
            transition: isDemoButon
               ? "visibility 500ms ease-out, opacity 500ms ease-out"
               : "visibility 500ms ease-out 100ms, opacity 500ms ease-out 100ms",
            clipPath: isDemoButon ? clipPathOutsideDemo : clipPathOutsideGithub,
            "&:hover": { opacity: ".8" },
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(0deg, #ce6c29 0%, #512b10 100%)",
               width: "100%",
               height: "100%",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               clipPath: isDemoButon
                  ? clipPathInsideDemo
                  : clipPathInsideGithub,
            },
         }}
      >
         <Box
            sx={{
               zIndex: "50",
               fontSize: "1rem",
               whiteSpace: "nowrap",
               position: "relative",
            }}
         >
            {isDemoButon ? "Demo" : "Github"}
         </Box>
      </Box>
   );
};

export default ProjectButtons;
