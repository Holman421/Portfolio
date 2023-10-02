import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";

type AboutMeInfoContainerProps = {
   title: string;
   description: string;
   top?: string;
   left?: string;
   right?: string;
   bottom?: string;
};

const AboutMeInfoContainer: React.FC<AboutMeInfoContainerProps> = ({
   title,
   description,
   top,
   left,
   right,
   bottom,
}) => {
   const titleRef = useRef<HTMLDivElement>(null);
   const [divWidth, setDivWidth] = useState<number | null>(null);

   const {
      clipPathOutside: titleClipPathOutside,
      clipPathInside: titleClipPathInside,
   } = createClipPath<5>(
      [
         { x: "0%", y: "0% + .75rem" },
         { x: "0% + .75rem", y: "0%" },
         { x: "100%", y: "0%" },
         { x: "100% - 2rem", y: "100%" },
         { x: "0%", y: "100%" },
      ],
      [
         { x: "+ 1px", y: "" },
         { x: "", y: "+ 1px" },
         { x: "- 2px", y: "+ 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const {
      clipPathOutside: descriptionClipPathOutside,
      clipPathInside: descriptionClipPathInside,
   } = createClipPath<11>(
      [
         { x: "0%", y: "0% + 2.2rem" },
         { x: `0% + ${divWidth - 30}px`, y: "0% + 2.2rem" },
         { x: `0% + ${divWidth - 30}px + 2.2rem`, y: "0%" },
         { x: "100% - .75rem", y: "0%" },
         { x: "100%", y: "0% + .75rem" },
         { x: "100%", y: "100% - 1.5rem" },
         { x: "100% - .75rem", y: "100% - .75rem" },
         { x: "100% - 5rem", y: "100% - .75rem" },
         { x: "100% - 5.75rem", y: "100%" },
         { x: "0% + .75rem", y: "100%" },
         { x: "0%", y: "100% - .75rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "", y: "- 1px" },
         { x: "+ 1px", y: "" },
      ]
   );

   useEffect(() => {
      // this calculates the width of titleDiv so that
      // descriptionDiv can make space for it, it also updates
      // if somebody in UI edits the title
      const resizeObserver = new ResizeObserver((entries) => {
         setDivWidth(entries[0].target.clientWidth);
      });
      if (titleRef.current) {
         resizeObserver.observe(titleRef.current);
      }
      return () => {
         resizeObserver.disconnect();
      };
   }, []);

   return (
      <Box
         sx={{
            position: "absolute",
            top: top,
            left: left,
            right: right,
            bottom: bottom,
         }}
      >
         <Box
            ref={titleRef}
            sx={{
               height: "2rem",
               clipPath: titleClipPathOutside,
               backgroundColor: "rgba(41, 196, 206)",
               position: "absolute",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
                  //  background: "black",
                  width: "100%",
                  height: "100%",
                  clipPath: titleClipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Box
               sx={{
                  position: "relative",
                  zIndex: "30",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: ".75rem",
                  fontSize: ".8rem",
                  paddingRight: "2.75rem",
               }}
            >
               {title}
            </Box>
         </Box>

         <Box
            sx={{
               minWidth: "10rem",
               maxWidth: "15rem",
               clipPath: descriptionClipPathOutside,
               backgroundColor: "rgba(41, 196, 206)",
               display: "inline-block",
               position: "relative",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  background:
                     "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
                  //  background: "black",
                  width: "100%",
                  height: "100%",
                  clipPath: descriptionClipPathInside,
                  zIndex: "20",
               },
            }}
         >
            <Box
               sx={{
                  position: "relative",
                  zIndex: "30",
                  padding: "2.5rem .75rem 1.5rem .75rem",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: ".7rem",
                  display: "inline-block",
               }}
            >
               {description}
            </Box>
         </Box>
      </Box>
   );
};

export default AboutMeInfoContainer;
