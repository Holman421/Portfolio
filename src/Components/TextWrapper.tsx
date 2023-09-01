import { Box } from "@mui/material";
import React from "react";

type TextWrapperProps = {
   children: React.ReactNode;
   sx?: any;
};

const TextWrapper: React.FC<TextWrapperProps> = ({ children, sx }) => {
   return (
      <Box
         sx={{
            backgroundColor: "#1B4367",
            padding: "1rem",
            display: "inline-block",
            boxShadow: "inset 0 0 0 1px #1B4367, inset 0 0 0 4px black",
            borderTop: "solid 2px #6FBDED",
            ...sx,
         }}
      >
         {children}
      </Box>
   );
};

export default TextWrapper;
