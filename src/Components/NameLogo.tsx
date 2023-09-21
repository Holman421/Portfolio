import { Box } from "@mui/material";
import React from "react";
import { background, mainLight } from "../Config/Colors";

const NameLogo = () => {
   return (
      <Box
         sx={{
            clipPath:
               "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            width: "5.5rem",
            height: "5.5rem",
            position: "absolute",
            top: "2rem",
            left: "2rem",
            backgroundColor: mainLight,
            zIndex: "2",
            transform: "rotate(22.5deg)",
         }}
      >
         <Box
            sx={{
               clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
               width: "5rem",
               height: "5rem",
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               backgroundColor: background,
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Box
               sx={{
                  fontSize: "2rem",
                  transform: "rotate(-22.5deg)",
               }}
            >
               AH
            </Box>
         </Box>
      </Box>
   );
};

export default NameLogo;
