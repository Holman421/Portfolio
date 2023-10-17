import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store/store";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import { breakpointUp1300px } from "../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";
import GlossElement from "../GlossElement";
import Shadows from "../Shadows/Shadows";

const DescriptionContainer = () => {
   const { clipPathOutside, clipPathInside } = createClipPath<9>(
      [
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 10rem", y: "100%" },
         { x: "0% + 9rem", y: "100% - 1rem" },
         { x: "0%", y: "100% - 1rem" },
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

   const {
      clipPathOutside: clipPathOutsideBig,
      clipPathInside: clipPathInsideBig,
   } = createClipPath<9>(
      [
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 10rem", y: "100%" },
         { x: "0% + 8.5rem", y: "100% - 1.5rem" },
         { x: "0%", y: "100% - 1.5rem" },
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
            top: "0rem",
            left: "0.1rem",
            ...breakpointUp1300px({
               width: "26rem",
               top: "3.3rem",
               left: "0.1rem",
            }),
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

         <Shadows zIndex="20" right="2rem" scale={0.8} />

         <Box
            sx={{
               position: "absolute",
               clipPath: clipPathOutside,
               background: "rgba(41, 196, 206)",
               width: "100%",
               height: "100%",
               zIndex: "10",
               transition: "all 600ms ease",
               ...breakpointUp1300px({
                  clipPath: clipPathOutsideBig,
               }),
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(-90deg, #1e9ca5 0%, #0c2e33 100%)",
                  width: "100%",
                  height: "100%",
                  clipPath: clipPathInside,
                  zIndex: "20",
                  transition: "all 600ms ease",
                  ...breakpointUp1300px({
                     clipPath: clipPathInsideBig,
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
                  // fontFamily: "'Open Sans', sans-serif",
                  fontFamily: font,
                  fontWeight: "300",
                  transition: "all 600ms ease",
                  ...breakpointUp1300px({
                     width: "20rem",
                     marginTop: isDefaultLanguage ? "1.5rem" : "1.1rem",
                     fontSize: isDefaultLanguage ? "1.3rem" : "1.5rem",
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
