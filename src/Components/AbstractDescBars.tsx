import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

type Duo = {
   leftWidth: number;
   rightWidth: number;
};

type BarDuoProps = {
   widths: {
      leftWidth: number;
      rightWidth: number;
   };
};

const BarDuo: React.FC<BarDuoProps> = ({ widths }) => {
   return (
      <Box
         sx={{
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

const AbstractDescBars: React.FC = () => {
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
         <BarDuo widths={duo1} />
         <BarDuo widths={duo2} />
         <BarDuo widths={duo3} />
      </Box>
   );
};

export default AbstractDescBars;
