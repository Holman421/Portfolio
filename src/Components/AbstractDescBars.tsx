import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import useIsVisible from "../Utils/CustomHooks/useIsVisible";
import { lightFlickering } from "../Utils/HelperFunctions/animations";

type Duo = {
   leftWidth: number;
   rightWidth: number;
};

type typeOfAnimation = 1 | 2 | 3;

type BarDuoProps = {
   widths: {
      leftWidth: number;
      rightWidth: number;
   };
   typeOfAnimation: typeOfAnimation;
   display: boolean;
};

const BarDuo: React.FC<BarDuoProps> = ({
   widths,
   typeOfAnimation,
   display,
}) => {
   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const animation1 = `${lightFlickering()} 1000ms ease-in-out forwards 1300ms`;
   const animation2 = `${lightFlickering()} 500ms ease-in-out forwards 500ms`;
   const animation3 = "";

   const handleTypeOfAnimation = () => {
      if (typeOfAnimation === 1) {
         return animation1;
      }
      return typeOfAnimation === 2 ? animation2 : animation3;
   };

   return (
      <Box
         ref={ref}
         sx={{
            opacity: "0",
            animation: isIntersecting && display ? handleTypeOfAnimation() : "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10%",
            width: "100%",
            "& > *": { transition: "all 1000ms linear" },
         }}
      >
         <Box
            sx={{
               width: `${widths.leftWidth}%`,
               height: "3px",
               backgroundColor: "#CF6C29",
            }}
         />
         <Box
            sx={{
               width: `${widths.rightWidth}%`,
               height: "1px",
               backgroundColor: "#29C4CE",
            }}
         />
      </Box>
   );
};

type AbstractDescBars = {
   typeOfAnimation?: typeOfAnimation;
   display?: boolean;
};

const AbstractDescBars: React.FC<AbstractDescBars> = ({
   typeOfAnimation = 1,
   display = true,
}) => {
   const [duo1, setDuo1] = useState<Duo>({
      leftWidth: 25,
      rightWidth: 75,
   });
   const [duo2, setDuo2] = useState<Duo>({
      leftWidth: 50,
      rightWidth: 50,
   });
   const [duo3, setDuo3] = useState<Duo>({
      leftWidth: 75,
      rightWidth: 25,
   });

   useEffect(() => {
      const intervalFunctions = [
         createIntervalFunction(setDuo1),
         createIntervalFunction(setDuo2),
         createIntervalFunction(setDuo3),
      ];

      return () => {
         intervalFunctions.forEach((interval) => clearInterval(interval));
      };
   }, []);

   const createIntervalFunction = (
      setDuo: React.Dispatch<React.SetStateAction<Duo>>
   ) => {
      const min = 500;
      const max = 1000;
      const interval = Math.floor(Math.random() * (max - min + 1) + min);

      return setInterval(() => {
         setDuo((prevDuo) => {
            const total = prevDuo.leftWidth + prevDuo.rightWidth;
            const leftWidth = Math.floor(Math.random() * total * 1);
            const rightWidth = total - leftWidth;
            return { leftWidth, rightWidth };
         });
      }, interval);
   };

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20%",
            width: "4rem",
            aspectRatio: "3/1",
         }}
      >
         <BarDuo
            display={display}
            widths={duo1}
            typeOfAnimation={typeOfAnimation}
         />
         <BarDuo
            display={display}
            widths={duo2}
            typeOfAnimation={typeOfAnimation}
         />
         <BarDuo
            display={display}
            widths={duo3}
            typeOfAnimation={typeOfAnimation}
         />
      </Box>
   );
};

export default AbstractDescBars;
