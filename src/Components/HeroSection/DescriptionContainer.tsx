import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import GlossElement from "../GlossElement";
import Shadows from "../Shadows/Shadows";

const DescriptionContainer = () => {
   const { clipPathOutside, clipPathInside } = createClipPath<9>(
      [
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "32.5%" },
         { x: "100% - 1rem", y: "35%" },
         { x: "50%", y: "35%" },
         { x: "42.5%", y: "27.5%" },
         { x: "0%", y: "27.5%" },
         { x: "0%", y: "0% + 2rem" },
         { x: "0% + 2rem", y: "0%" },
      ],
      [
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
      ]
   );

   const descriptionText = useSelectAppropriateText(
      "I am a front-end developer specializing in React.js",
      "Jsem front-end vývojář specializující se na React.js"
   );

   return (
      <Box
         sx={{
            position: "relative",
            display: "block",
            // width: "22rem",
            width: "20rem",
            aspectRatio: "1/1",
         }}
      >
         <Box
            sx={{
               position: "absolute",
               top: "-1.6rem",
               right: "-4rem",
               zIndex: "30",
            }}
         >
            <GlossElement></GlossElement>
         </Box>

         <Shadows zIndex="20" right="2rem" scale=".8" />

         <Box
            sx={{
               position: "absolute",
               clipPath: clipPathOutside,
               background: "rgba(41, 196, 206)",
               width: "100%",
               height: "100%",
               zIndex: "10",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(-90deg, #1e9ca5 0%, #0c2e33 100%)",
                  width: "100%",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Typography
               sx={{
                  position: "relative",
                  marginLeft: "2.5rem",
                  marginTop: "0.9rem",
                  fontSize: "1.2rem",
                  width: "16rem",
                  zIndex: "30",
                  fontFamily: "'Open Sans', sans-serif",
               }}
            >
               {descriptionText}
            </Typography>
         </Box>
      </Box>
   );
};

export default DescriptionContainer;
