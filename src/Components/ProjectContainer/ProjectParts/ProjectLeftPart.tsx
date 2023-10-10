import { Box } from "@mui/material";
import React from "react";
import { breakpointLower800px } from "../../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../../Utils/HelperFunctions/createClipPath";
import GlossElement from "../../GlossElement";
import Shadows from "../../Shadows/Shadows";

type ProjectLeftPartProps = {
   projectName: string;
   projectNumber: string;
};

const ProjectLeftPart: React.FC<ProjectLeftPartProps> = ({
   projectName,
   projectNumber,
}) => {
   const { clipPathOutside, clipPathInside } = createClipPath<9>(
      [
         { x: "0%", y: "0% + 1rem" },
         { x: "0% + 1rem", y: "0%" },
         { x: "100% - 2rem", y: "0%" },
         { x: "100%", y: "0% + 2rem" },
         { x: "100%", y: "100%" },
         { x: "0% + 8rem", y: "100%" },
         { x: "0% + 7rem", y: "100% - 1rem" },
         { x: "0% + 1rem", y: "100% - 1rem" },
         { x: "0%", y: "100% - 2rem" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "" },
      ]
   );

   return (
      <Box sx={{ position: "relative" }}>
         <Box
            sx={{
               width: "17rem",
               height: "10rem",
               ...breakpointLower800px({ width: "16rem", height: "8rem" }),
               backgroundColor: "rgba(41, 196, 206)",
               clipPath: clipPathOutside,
               position: "relative",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
                  width: "100%",
                  left: "0",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  zIndex: "50",
                  bottom: "2rem",
                  fontSize: "1.5rem",
                  left: "1.25rem",
               }}
            >
               {projectName}
            </Box>
            <Box
               sx={{
                  position: "absolute",
                  top: ".5rem",
                  left: "1.25rem",
                  zIndex: "50",
                  fontSize: "2.5rem",
               }}
            >
               {projectNumber}
            </Box>
            <Shadows zIndex="50" right="3rem" scale=".8" />
         </Box>
         <Box
            sx={{
               position: "absolute",
               zIndex: "19",
               top: "-1.6rem",
               right: "-2.8rem",
            }}
         >
            <GlossElement />
         </Box>
      </Box>
   );
};

export default ProjectLeftPart;
