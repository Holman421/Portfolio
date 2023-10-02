import { Box } from "@mui/material";
import React from "react";
import { mainPallete } from "../../Config/Colors";

type LineProps = {
   name?: string;
   color?: string;
   length: string;
   thickness?: string;
   rotate?: string;
   top?: string;
   bottom?: string;
   left?: string;
   right?: string;
   transformOrigin?: string;
};

const Line: React.FC<LineProps> = ({
   color = mainPallete.mainLight,
   length,
   thickness = "2px",
   rotate,
   top,
   bottom,
   left,
   right,
   transformOrigin = "left",
}) => {
   return (
      <Box
         sx={{
            position: "absolute",
            backgroundColor: color,
            height: thickness,
            width: length,
            transform: `rotate(${rotate}deg)`,
            transformOrigin: transformOrigin,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
         }}
      />
   );
};

export default Line;
