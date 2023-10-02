import { Box } from "@mui/material";
import React from "react";
import { mainPallete } from "../../Config/Colors";

type CircleProps = {
   color?: string;
   size?: string;
   top?: string;
   bottom?: string;
   left?: string;
   right?: string;
};

const Circle: React.FC<CircleProps> = ({
   color = mainPallete.mainLight,
   size = "2rem",
   top,
   bottom,
   left,
   right,
}) => {
   return (
      <Box
         sx={{
            position: "absolute",
            zIndex: "10",
            backgroundColor: "black",
            borderRadius: "50%",
            border: "3px solid " + color,
            transform: "translate(-50%, -50%)",
            width: size,
            height: size,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
         }}
      />
   );
};

export default Circle;
