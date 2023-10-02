import { Box } from "@mui/material";
import React from "react";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import Shadows from "../Shadows/Shadows";
import AvatarModel from "../3dModels/AvatarModel";

const AvatarContainer = () => {
   const { clipPathOutside, clipPathInside } = createClipPath<16>(
      [
         { x: "0%", y: "0% + 2rem" },
         { x: "0% + 2rem", y: "0%" },
         { x: "50% - 2rem", y: "0%" },
         { x: "50% - 1rem", y: "0% + 1rem" },
         { x: "50% + 1rem", y: "0% + 1rem" },
         { x: "50% + 2rem", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 2rem" },
         { x: "100% - 2rem", y: "100%" },
         { x: "50% + 2rem", y: "100%" },
         { x: "50% + 1rem", y: "100% - 1rem" },
         { x: "50% - 1rem", y: "100% - 1rem" },
         { x: "50% - 2rem", y: "100%" },
         { x: "0% + 1rem", y: "100%" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "" },
      ]
   );

   return (
      <Box
         sx={{
            margin: "auto",
            marginTop: "2rem",
            width: "18rem",
            aspectRatio: "3/4",
            position: "relative",
            clipPath: clipPathOutside,
            backgroundColor: "rgba(41, 196, 206)",
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
               //  background: "black",
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
               zIndex: "50",
               position: "absolute",
               top: "12%",
               width: "100%",
               height: "90%",
            }}
         >
            <AvatarModel />
         </Box>
      </Box>
   );
};

export default AvatarContainer;
