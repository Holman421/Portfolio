import { Box, Typography } from "@mui/material";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import GlossElement from "../GlossElement";
import Shadows from "../Shadows/Shadows";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import { breakpointLower650px } from "../../Utils/HelperFunctions/breakpoints";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store/store";
import AbstractDescBars from "../AbstractDescBars";
import useScreenSize from "../../Utils/CustomHooks/useScreenSize";

type AbstractionBars = { isIntersecting: boolean };

const AbstractionBars: React.FC<AbstractionBars> = ({ isIntersecting }) => {
   return (
      <Box
         sx={{
            position: "absolute",
            left: "-3rem",
            top: "12.75rem",
            transition: "all 600ms ease",
            ...breakpointLower650px({
               top: "16rem",
               left: "1rem",
               transform: "scale(.7)",
            }),
         }}
      >
         <AbstractDescBars />
         <Box
            sx={{
               position: "absolute",
               bottom: "-.1rem",
               left: "0rem",
               width: "4rem",
               transform: isIntersecting ? "scaleX(1)" : "scaleX(0)",
               transformOrigin: "right",
               transition: "transform 300ms ease 1000ms",
               height: ".5px",
               backgroundColor: "#CF6C29",
            }}
         />
         <Box
            sx={{
               position: "absolute",
               bottom: "3.4rem",
               right: "-3.5rem",
               width: isIntersecting ? "5rem" : "0",
               transition: "all 300ms ease 700ms",
               height: ".5px",
               backgroundColor: "#CF6C29",
               transform: "rotate(-45deg)",
               transformOrigin: "right",
            }}
         />
      </Box>
   );
};

const HeadingContainer = () => {
   const isBellow650 = useScreenSize(650, "bellow");
   const isUp1300px = useScreenSize(650, "bellow");

   const { clipPathOutside, clipPathInside } = createClipPath<11>(
      [
         { x: "0%", y: "0% + 1rem" },
         //  { x: `0% + ${isUp1300px ? "14.5rem" : "12rem"}`, y: "0%" },
         //  { x: `0% + ${isUp1300px ? "16rem" : "13.5rem"}`, y: "0% + 1.5rem" },
         { x: "0% + 1rem", y: "0%" },
         { x: "0% + 12rem", y: "0%" },
         { x: "0% + 13.5rem", y: "0% + 1.5rem" },
         { x: "100% - 1rem", y: "0% + 1.5rem" },
         { x: "100%", y: "0% + 2.5rem" },
         { x: "100%", y: `100% - ${isBellow650 ? "1rem" : "2rem"}` },
         {
            x: `0% + ${isBellow650 ? "10rem" : "11rem"}`,
            y: `100% - ${isBellow650 ? "1rem" : "2rem"}`,
         },
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

   const font = useSelectAppropriateText(
      "'Orbitron', sans-serif",
      "'Exo 2', sans-serif"
   );

   const { isDefaultLanguage } = useSelector(
      (state: StoreType) => state.themeState
   );

   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   return (
      <Box
         ref={ref}
         sx={{
            position: "relative",
            display: "inline-block",
            transform: isIntersecting ? "translateX()" : "translateX(-4rem)",
            opacity: isIntersecting ? "1" : "0",
            transition: "all 600ms ease-in",
            width: "22rem",
            aspectRatio: "22/11",
            ...breakpointLower650px({
               width: "17rem",
               aspectRatio: "100/45",
            }),
         }}
      >
         <AbstractionBars isIntersecting={isIntersecting} />
         <Box
            sx={{
               clipPath: clipPathOutside,
               backgroundColor: "rgba(41, 196, 206)",
               width: "100%",
               height: "100%",
               position: "absolute",
               transition: "all 600ms ease-in",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
                  width: "100%",
                  height: "100%",
                  clipPath: clipPathInside,
                  transition: "all 600ms ease-in",

                  zIndex: "20",
               },
            }}
         >
            <Shadows zIndex="20" left="8rem" leftSmall="3rem" scale={1.2} />

            <Typography
               sx={{
                  position: "absolute",
                  fontSize: isDefaultLanguage ? "1rem" : "1.2rem",
                  zIndex: "30",
                  left: "2rem",
                  top: "1.75rem",
                  fontFamily: font,
                  transition: "top 600ms ease-in, left 600ms ease-in",
                  ...breakpointLower650px({
                     top: "1rem",
                     left: "1.5rem",
                     fontSize: isDefaultLanguage ? ".9rem" : "1rem",
                  }),
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
                  top: "55%",
                  left: "2rem",
                  whiteSpace: "nowrap",
                  transform: "translateY(-50%)",
                  transition: "all 600ms ease-in",
                  ...breakpointLower650px({
                     top: "4.2rem",
                     left: "1.5rem",
                     fontSize: "2.05rem",
                  }),
               }}
            >
               Ales Holman
            </Typography>
         </Box>
         <Box
            sx={{
               position: "absolute",
               top: "-1.55rem",
               left: "1.5rem",
               zIndex: "300",
            }}
         >
            <GlossElement />
         </Box>
      </Box>
   );
};

export default HeadingContainer;
