import { Box } from "@mui/material";
import React from "react";
import { mainPallete } from "../../Config/Colors";

type LineProps = {
   name?: string;
   color?: string;
   length: string;
   thickness?: string;
   angle?: string;
   top?: any;
   bottom?: any;
   left?: any;
   right?: any;
   transformOrigin?: string;
   children?: React.ReactNode;
   transition?: string;
};

const Line: React.FC<LineProps> = ({
   color = "#ce6c29",
   length,
   thickness = "2px",
   angle,
   top,
   bottom,
   left,
   right,
   transformOrigin = "left",
   transition,
   children,
}) => {
   return (
      <Box
         sx={{
            position: "absolute",
            backgroundColor: color,
            height: thickness,
            width: length,
            transform: `rotate(${angle})`,
            transformOrigin: transformOrigin,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            transition: `top 300ms ease, left 300ms ease${transition}`,
         }}
      >
         {children}
      </Box>
   );
};

export default Line;
