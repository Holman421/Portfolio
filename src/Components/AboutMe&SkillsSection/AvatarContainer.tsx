import React from "react";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import Shadows from "../Shadows/Shadows";
import AvatarModel from "../3dModels/AvatarModel";
import BehindAvatarLines from "./BehindAvatarLines";
import { Box } from "@mui/material";
import { lightFlickering } from "../../Utils/HelperFunctions/animations";

type AvatarContainerProps = {
   isIntersecting: boolean;
};

const AvatarContainer: React.FC<AvatarContainerProps> = ({
   isIntersecting,
}) => {
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
      <>
         <Box
            sx={{
               width: "clamp(16rem, 33vw, 30rem)",
               height: isIntersecting ? "70vh" : "5rem",
               maxHeight: "75vh",
               position: "absolute",
               top: "50%",
               left: "50%",
               transition: "height 300ms ease 300ms",
               transform: "translate(-50%, -50%)",
               clipPath: clipPathOutside,
               backgroundColor: "rgba(41, 196, 206)",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
                  //  background: "black",
                  width: "100%",
                  left: "0",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Shadows zIndex="100" right="30%" scale="2" />
         </Box>
         <Box
            sx={{
               zIndex: "50",
               position: "absolute",
               height: "clamp(20rem, 48vw, 45rem)",
               maxHeight: "75vh",
               width: "100%",
               top: "55%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               opacity: "0",
               animation: isIntersecting
                  ? `${lightFlickering()} 500ms ease-in-out forwards 600ms`
                  : "",
               transition: "opacity 200ms ease 600ms",
            }}
         >
            <AvatarModel />
         </Box>
         <BehindAvatarLines isIntersecting={isIntersecting} />
      </>
   );
};

export default AvatarContainer;
