import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store/store";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import selectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import GlossElement from "../GlossElement";
import Shadows from "../Shadows/Shadows";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";

const HeadingContainer = () => {
   const { clipPathOutside, clipPathInside } = createClipPath<11>(
      [
         { x: "0%", y: "0% + 1rem" },
         { x: "0% + 1rem", y: "0%" },
         { x: "0% + 10rem", y: "0%" },
         { x: "0% + 11.5rem", y: "0% + 1.5rem" },
         { x: "100% - 1rem", y: "0% + 1.5rem" },
         { x: "100%", y: "0% + 2.5rem" },
         { x: "100%", y: "100% - 2rem" },
         { x: "0% + 11rem", y: "100% - 2rem" },
         { x: "0% + 9rem", y: "100%" },
         { x: "0% + 1rem", y: "100%" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
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


   const greetText = useSelectAppropriateText(
      "Hey, my name is",
      "Ahoj, jmenuji se"
   );


   return (
      <Box sx={{ position: "relative", display: "inline-block" }}>
         <Box
            sx={{
               width: "22rem",
               height: "12rem",
               clipPath: clipPathOutside,
               backgroundColor: "rgba(41, 196, 206)",
               position: "absolute",
               left: "-9.3rem",
               top: "-10.5rem",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
                  width: "100%",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Shadows zIndex="20" left="8rem" scale="1.4" />

            <Typography
               sx={{
                  position: "absolute",
                  fontSize: "1rem",
                  zIndex: "30",
                  left: "2rem",
                  top: "2rem",
                  fontFamily: "'Open Sans', sans-serif",
               }}
            >
               {greetText}
            </Typography>
            <Typography
               sx={{
                  position: "absolute",
                  fontSize: "2.5rem",
                  zIndex: "30",
                  fontFamily: "Orbitron",
                  top: "50%",
                  left: "2rem",
                  whiteSpace: "nowrap",
                  transform: "translateY(-50%)",
               }}
            >
               Ales Holman
            </Typography>
         </Box>
         <Box
            sx={{
               position: "absolute",
               bottom: "8.1rem",
               left: "1rem",
               zIndex: "300",
            }}
         >
            <GlossElement />
         </Box>
      </Box>
   );
};

export default HeadingContainer;
