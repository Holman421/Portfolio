import { Box } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import useMousePosition from "../Utils/CustomHooks/useMousePosition";
import { createClipPath } from "../Utils/HelperFunctions/createClipPath";

type CustomCursorProps = {
   x: number;
   y: number;
};

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y }) => {
   const offset = ".5rem";
   const halfOffset = ".25rem";
   const [clipPathOutside, clipPathInside] = useMemo(() => {
      const { clipPathOutside, clipPathInside } = createClipPath<6>(
         [
            { x: `50% - ${halfOffset}`, y: `0%` },
            { x: `50% + ${halfOffset}`, y: `0%` },
            { x: `100%`, y: `100% - ${offset}` },
            { x: `100% - ${offset}`, y: `100%` },
            { x: `${offset}`, y: `100%` },
            { x: `0%`, y: `100% - ${offset}` },
         ],
         [
            { x: "+ 1px", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
            { x: "", y: "" },
         ]
      );

      return [clipPathOutside, clipPathInside];
   }, []);

   const outsideWidth = ".75rem";
   const outsideHeight = "1px";

   return (
      <>
         <Box
            sx={{
               position: "fixed",
               zIndex: "10000",
               top: "0",
               left: "0",
               width: "40px",
               height: "30px",
               transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
               transition: "all 200ms ease-out",
               pointerEvents: "none",
               //  background: "red",
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  bottom: "0rem",
                  right: "0",
                  width: outsideWidth,
                  height: outsideHeight,
                  background: "white",
                  "&::before": {
                     content: '""',
                     position: "absolute",
                     right: "0",
                     bottom: "0",
                     width: outsideHeight,
                     height: outsideWidth,
                     background: "white",
                     //  transform: `rotate(90deg)`,
                  },
               }}
            />
            <Box
               sx={{
                  position: "absolute",
                  bottom: "0rem",
                  left: "0",
                  width: outsideWidth,
                  height: outsideHeight,
                  background: "white",
                  "&::before": {
                     content: '""',
                     position: "absolute",
                     left: "0",
                     bottom: "0",
                     width: outsideHeight,
                     height: outsideWidth,
                     background: "white",
                  },
               }}
            />
            <Box
               sx={{
                  position: "absolute",
                  top: "0rem",
                  right: "0",
                  width: outsideWidth,
                  height: outsideHeight,
                  background: "white",
                  "&::before": {
                     content: '""',
                     position: "absolute",
                     right: "0",
                     top: "0",
                     width: outsideHeight,
                     height: outsideWidth,
                     background: "white",
                  },
               }}
            />
            <Box
               sx={{
                  position: "absolute",
                  top: "0rem",
                  left: "0",
                  width: outsideWidth,
                  height: outsideHeight,
                  background: "white",
                  "&::before": {
                     content: '""',
                     position: "absolute",
                     left: "0",
                     top: "0",
                     width: outsideHeight,
                     height: outsideWidth,
                     background: "white",
                  },
               }}
            />
         </Box>
         <Box
            sx={{
               position: "fixed",
               zIndex: "10000",
               top: "0",
               left: "0",
               width: ".75rem",
               height: "2px",
               background: "white",
               transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(45deg)`,
               pointerEvents: "none",
               "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "white",
                  transform: "rotate(90deg)",
                  pointerEvents: "none",
               },
            }}
         ></Box>
      </>
   );
};

export default CustomCursor;
