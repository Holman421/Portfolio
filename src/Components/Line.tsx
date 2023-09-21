import { Box } from "@mui/material";
import React from "react";
import { mainLight } from "../Config/Colors";

type LineProps = {
   color?: string;
   length: string;
   height?: string;
   rotate?: string;
   top?: string;
   bottom?: string;
   left?: string;
   right?: string;
};

const Line: React.FC<LineProps> = ({
   color = mainLight,
   length,
   height = "3px",
   rotate,
   top,
   bottom,
   left,
   right,
}) => {
   return (
      <Box
         sx={{
            position: "absolute",
            backgroundColor: color,
            height: height,
            width: length,
            transform: `rotate(${rotate}deg)`,
            transformOrigin: "left",
            top: top,
            bottom: bottom,
            left: left,
            right: right,
         }}
      />
   );
};

export default Line;
