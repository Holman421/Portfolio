import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../Redux/store/store";

const MainBox: React.FC = () => {
   const currentIndex = useSelector(
      (state: StoreType) => state.themeState.currentPageIndex
   );
   return (
      <Box
         sx={{
            border: "solid 3px #6FBDED",
            width: ".75rem",
            height: ".75rem",
            position: "absolute",
            top: `${currentIndex * 1 - 0.1}rem`,
            transition: "top 200ms ease",
         }}
      />
   );
};

const CurrentPageIndicator: React.FC = () => {
   const boxStyling = {
      border: "solid 1px #1B4367",
      width: ".5rem",
      height: ".5rem",
   };
   return (
      <Box
         sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: ".5rem",
            position: "fixed",
            top: "50%",
            right: "2%",
            transform: "translateY(-50%)",
         }}
      >
         <MainBox />
         <Box sx={boxStyling} />
         <Box sx={boxStyling} />
         <Box sx={boxStyling} />
         <Box sx={boxStyling} />
         <Box sx={boxStyling} />
      </Box>
   );
};

export default CurrentPageIndicator;
