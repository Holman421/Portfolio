import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { mainPallete } from "../../Config/Colors";
import { StoreType } from "../../Redux/store/store";
import useGetDivWidth from "../../Utils/CustomHooks/useGetDivWidth";
import useScreenSize from "../../Utils/CustomHooks/useScreenSize";
import {
   breakpointLower800px,
   breakpointUp1300px,
} from "../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";

type SkillContainerProps = {
   title: string;
   number: string;
   top?: string;
   topBig?: string;
   left?: string;
   leftBig?: string;
   right?: string;
   bottom?: string;
   angle?: string;
   opacity?: string;
   transition?: string;
   pdf: any;
   pdfName: string;
   isComplete?: boolean;
};

const SkillContainer: React.FC<SkillContainerProps> = ({
   title,
   number,
   top,
   topBig,
   left,
   leftBig,
   right,
   bottom,
   angle,
   opacity = "1",
   transition,
   pdf,
   pdfName,
   isComplete = true,
}) => {
   const { ref, width } = useGetDivWidth();
   const isAbove1300px = useScreenSize();

   const {
      clipPathOutside: certificationClipPathOutside,
      clipPathInside: certificationClipPathInside,
   } = createClipPath<5>(
      [
         { x: "0%", y: "0%" },
         { x: `100% - ${isAbove1300px ? "2.2rem" : "1.75rem"}`, y: "0%" },
         { x: "100%", y: "100%" },
         { x: "0% + .5rem", y: "100%" },
         { x: "0%", y: "100% - .5rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 2px", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const {
      clipPathOutside: titleClipPathOutside,
      clipPathInside: titleClipPathInside,
   } = createClipPath<11>(
      [
         { x: "0%", y: "0% + 1rem" },
         { x: "0% + 1rem", y: "0%" },
         { x: "100% - 4rem", y: "0%" },
         { x: "100% - 3.5rem", y: "0% + .5rem" },
         { x: "100% - .5rem", y: "0% + .5rem" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "100% - 4rem", y: "100%" },
         {
            x: `100% - ${isAbove1300px ? "6.4rem" : "6rem"}`,
            y: `100% - ${isAbove1300px ? "2.4rem" : "2rem"}`,
         },
         { x: "0%", y: `100% - ${isAbove1300px ? "2.4rem" : "2rem"}` },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const { showSkillsContainers, selectedMode } = useSelector(
      (state: StoreType) => state.avatarState
   );

   return (
      <Box
         sx={{
            opacity: showSkillsContainers ? opacity : "0",
            visibility: showSkillsContainers ? "visible" : "hidden",
            transition:
               selectedMode === "skills"
                  ? "all 750ms ease-out"
                  : "all 250ms ease-out",
            position: "absolute",
            maxWidth: "10rem",
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            transform: `rotate(${angle})`,
            ...breakpointUp1300px({
               maxWidth: "15rem",
               top: topBig,
               left: leftBig,
            }),
         }}
      >
         <Box
            ref={ref}
            sx={{
               height: "1.75rem",
               width: "8.6rem",
               marginTop: "2.5rem",
               clipPath: certificationClipPathOutside,
               backgroundColor: mainPallete.secondaryLight,
               position: "absolute",
               transition: "all 500ms ease",
               ...breakpointUp1300px({
                  marginTop: "3.1rem",
                  height: "2.2rem",
                  width: "11.6rem",
               }),
               "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  background: `linear-gradient(180deg, ${mainPallete.secondaryGradientLight} 0%, ${mainPallete.secondaryGraidentDark} 100%)`,
                  height: "100%",
                  clipPath: certificationClipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  zIndex: "50",
                  left: "1rem",
                  bottom: ".5rem",
                  fontSize: ".8rem",
                  cursor: isComplete ? "pointer" : "auto",
                  ...breakpointUp1300px({
                     fontSize: "1rem",
                  }),
               }}
            >
               <a href={isComplete ? pdf : undefined} target="_blank">
                  {isComplete ? "Certification" : "In progress"}
               </a>
            </Box>
         </Box>
         <Box
            sx={{
               width: "13rem",
               //  height: "4.25rem",
               aspectRatio: "52/17",
               background: mainPallete.mainLight,
               clipPath: titleClipPathOutside,
               position: "relative",
               transition: "all 500ms ease",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background: `linear-gradient(180deg, ${mainPallete.mainGradientLight} 0%, ${mainPallete.mainGradientDark} 100%)`,
                  width: "100%",
                  height: "100%",
                  clipPath: titleClipPathInside,
                  zIndex: "20",
               },
               ...breakpointUp1300px({
                  width: "16rem",
               }),
            }}
         />
         <Box
            sx={{
               position: "absolute",
               zIndex: "50",
               right: "-2.5rem",
               top: ".8rem",
            }}
         >
            {/* {number} */}
         </Box>
         <Box
            sx={{
               position: "absolute",
               zIndex: "50",
               left: "1rem",
               top: ".75rem",
               fontSize: ".8rem",
               ...breakpointUp1300px({
                  top: ".9rem",
                  fontSize: "1.1rem",
               }),
            }}
         >
            {title}
         </Box>
      </Box>
   );
};

export default SkillContainer;
