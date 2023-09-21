import { Box } from "@mui/material";
import React from "react";
import { background, mainDark, mainLight } from "../Config/Colors";

type TextWrapperProps = {
   children: React.ReactNode;
   sx?: any;
};

const TextWrapper: React.FC<TextWrapperProps> = ({ children, sx }) => {
   return (
      <Box
         sx={{
            backgroundColor: mainDark,
            padding: "1rem 2rem 1rem 1rem",
            display: "inline-block",
            position: "relative",
            // right cut black corner
            ":after": {
               content: '""',
               position: "absolute",
               bottom: "0",
               right: "0",
               width: "0",
               height: "0",
               borderLeft: "2.5rem solid transparent",
               borderBottom: "2.5rem solid " + background,
            },
            ...sx,
         }}
      >
         <Box
            // middle black area
            sx={{
               position: "absolute",
               zIndex: "2",
               bottom: "0",
               left: "50%",
               width: "8rem",
               height: "10%",
               transform: "translateX(-50%)",
               backgroundColor: background,
               clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            }}
         />
         <Box
            //bottom light line
            sx={{
               backgroundColor: mainLight,
               height: ".2rem",
               width: "30%",
               position: "absolute",
               left: "-.7rem",
               bottom: "-.75rem",
            }}
         />
         <Box
            //left line
            sx={{
               backgroundColor: mainLight,
               height: "calc(100% + 1.45rem)",
               width: ".2rem",
               position: "absolute",
               left: "-.75rem",
               bottom: "-.75rem",
            }}
         />
         <Box
            //top line
            sx={{
               backgroundColor: mainLight,
               height: ".2rem",
               width: "calc(100% + 1rem)",
               position: "absolute",
               left: "-.7rem",
               top: "-.7rem",
            }}
         />
         {children}
      </Box>
   );
};

export default TextWrapper;
