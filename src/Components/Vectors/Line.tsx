import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store/store";
import { breakpointUp1300px } from "../../Utils/HelperFunctions/breakpoints";

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
   topBig?: string;
   leftBig?: string;
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
   topBig,
   leftBig,
}) => {
   const { areAvatarTransitionsOn, applyFirstAppearTransition } = useSelector(
      (state: StoreType) => state.avatarState
   );

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
            left: left,
            bottom: bottom,
            right: right,
            transition: areAvatarTransitionsOn
               ? applyFirstAppearTransition
                  ? transition
                  : "all 500ms ease"
               : "",
            ...breakpointUp1300px({
               top: topBig,
               left: leftBig,
            }),
         }}
      >
         {children}
      </Box>
   );
};

export default Line;
