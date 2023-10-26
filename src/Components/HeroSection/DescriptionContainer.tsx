import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store/store";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import useScreenSize from "../../Utils/CustomHooks/useScreenSize";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import {
   breakpointLower650px,
   breakpointUp1300px,
} from "../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import AbstractDescBars from "../AbstractDescBars";
import GlossElement from "../GlossElement";
import Shadows from "../Shadows/Shadows";

type AbstractionBars = { isIntersecting: boolean };

const AbstractionBars: React.FC<AbstractionBars> = ({ isIntersecting }) => {
   return (
      <Box
         sx={{
            position: "absolute",
            right: "-1rem",
            top: "-3.5rem",
            transition: "all 600ms ease",
            ...breakpointLower650px({
               top: "-8.9rem",
               right: "-.7rem",
               transform: "scale(.7)",
            }),
         }}
      >
         <AbstractDescBars />
         <Box
            sx={{
               position: "absolute",
               bottom: "-2px",
               left: "0rem",
               width: isIntersecting ? "4rem" : "0",
               height: ".5px",
               backgroundColor: "#CF6C29",
               transition: "all 300ms ease 1000ms",
            }}
         />
         <Box
            sx={{
               position: "absolute",
               bottom: "-2.25rem",
               left: "-2.1rem",
               width: isIntersecting ? "3rem" : "0",
               height: ".5px",
               backgroundColor: "#CF6C29",
               transform: "rotate(-45deg)",
               transformOrigin: "left",
               transition: "all 300ms ease 700ms",
            }}
         />
      </Box>
   );
};

const DescriptionContainer = () => {
   const isBellow650 = useScreenSize(650, "bellow");

   const {
      clipPathOutside: clipPathOutsideSmall,
      clipPathInside: clipPathInsideSmall,
   } = createClipPath<9>(
      [
         { x: "0%", y: `0% + ${isBellow650 ? "1rem" : "2rem"}` },
         {
            x: `0% + ${isBellow650 ? "8.2rem" : "8.5rem"}`,
            y: `0% + ${isBellow650 ? "1rem" : "2rem"}`,
         },
         { x: `0% + ${isBellow650 ? "9.2rem" : "10.5rem"}`, y: "0%" },
         { x: "100%", y: "0%" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100% " },
         { x: "0% + 1rem", y: "100% " },
         { x: "0%", y: "100% - 1rem" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "" },
         { x: "+ 1px", y: "" },
      ]
   );

   const { clipPathOutside, clipPathInside } = createClipPath<9>(
      [
         { x: "0%", y: "0% + 2rem" },
         { x: "0% + 2rem", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 10rem", y: "100%" },
         { x: "0% + 9rem", y: "100% - 1rem" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const {
      clipPathOutside: clipPathOutsideBig,
      clipPathInside: clipPathInsideBig,
   } = createClipPath<9>(
      [
         { x: "0%", y: "0% + 2rem" },
         { x: "0% + 2rem", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 10rem", y: "100%" },
         { x: "0% + 8.5rem", y: "100% - 1.5rem" },
         { x: "0%", y: "100% - 1.5rem" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const descriptionText = useSelectAppropriateText(
      "I am a front-end developer specializing in React.js",
      "Jsem front-end vývojář specializující se na React.js"
   );

   const font = useSelectAppropriateText(
      "'Orbitron', sans-serif",
      "'Exo 2', sans-serif"
   );

   const { isDefaultLanguage } = useSelector(
      (state: StoreType) => state.themeState
   );

   return (
      <Box
         ref={ref}
         sx={{
            position: "relative",
            display: "block",
            width: "20rem",
            aspectRatio: "100/33",
            transform: isIntersecting ? "translateX()" : "translateX(4rem)",
            opacity: isIntersecting ? "1" : "0",
            transition: "all 600ms ease-in, top 400ms ease",
            margin: "-1.5rem 0 0 9.4rem",
            ...breakpointLower650px({
               margin: "-.9rem 0 0 1rem",
               width: "16rem",
               aspectRatio: "100/35",
            }),
         }}
      >
         <Box
            sx={{
               position: "absolute",
               top: "-1.6rem",
               right: "-4rem",
               zIndex: "30",
               ...breakpointLower650px({
                  right: "-5.5rem",
               }),
            }}
         >
            <GlossElement></GlossElement>
         </Box>

         <Shadows zIndex="20" right="2rem" rightSmall="0rem" scale={0.8} />

         <AbstractionBars isIntersecting={isIntersecting} />

         <Box
            sx={{
               position: "absolute",
               clipPath: clipPathOutside,
               background: "rgba(41, 196, 206)",
               width: "100%",
               height: "100%",
               zIndex: "10",
               transition: "all 600ms ease",
               ...breakpointLower650px({
                  clipPath: clipPathOutsideSmall,
               }),
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background: `linear-gradient(${
                     isBellow650 ? "180" : "-90"
                  }deg, #1e9ca5 0%, #0c2e33 100%)`,
                  width: "100%",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
                  transition: "all 600ms ease",
                  ...breakpointLower650px({
                     clipPath: clipPathInsideSmall,
                  }),
               },
            }}
         >
            <Typography
               sx={{
                  position: "relative",
                  marginLeft: "2.5rem",
                  marginTop: isDefaultLanguage ? "1.3rem" : "1rem",
                  fontSize: isDefaultLanguage ? "1rem" : "1.2rem",
                  width: "16rem",
                  zIndex: "30",
                  fontFamily: font,
                  fontWeight: "300",
                  transition: "top 600ms ease-in, left 600ms ease-in",
                  ...breakpointLower650px({
                     marginLeft: "1.5rem",
                     marginTop: isDefaultLanguage ? "1.7rem" : "1.4rem",
                     fontSize: isDefaultLanguage ? ".9rem" : "1rem",
                  }),
               }}
            >
               {descriptionText}
            </Typography>
         </Box>
      </Box>
   );
};

export default DescriptionContainer;
