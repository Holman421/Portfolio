import { Box } from "@mui/material";
import React from "react";
import { SelectedMode } from "../Types/Types";
import { createClipPath } from "../Utils/HelperFunctions/createClipPath";

type AvatarSectionButtonProps = {
   handleSwitchModes: (mode: SelectedMode) => void;
   isActive: boolean;
   name: string;
   handleSwitchModesArgument: SelectedMode;
};

const AvatarSectionButton: React.FC<AvatarSectionButtonProps> = ({
   handleSwitchModes,
   isActive,
   name,
   handleSwitchModesArgument,
}) => {
   const { clipPathOutside, clipPathInside } = createClipPath<8>(
      [
         { x: "0%", y: "0% + .5rem" },
         { x: "0% + .5rem", y: "0%" },
         { x: "100% - .5rem", y: "0%" },
         { x: "100%", y: "0% + .5rem" },
         { x: "100%", y: "100% - .5rem" },
         { x: "100% - .5rem", y: "100%" },
         { x: "0% + .5rem", y: "100%" },
         { x: "0%", y: "100% - .5rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );
   return (
      <Box
         onClick={() => {
            handleSwitchModes(handleSwitchModesArgument);
         }}
         component={"button"}
         sx={{
            zIndex: "10000",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: !isActive ? "#CF6C29" : "#29C4CE",
            padding: ".5rem 1rem",
            clipPath: clipPathOutside,
            position: "relative",
            "&::before": {
               content: '""',
               position: "absolute",
               background: !isActive
                  ? "linear-gradient(180deg, #ce6c29 0%, #512b10 100%)"
                  : "linear-gradient(180deg, #1e9ca5 0%, #0c2e33 100%)",
               width: "100%",
               height: "100%",
               clipPath: clipPathInside,
               zIndex: "20",
            },
         }}
      >
         <Box
            sx={{
               zIndex: "50",
               fontSize: "1rem",
               whiteSpace: "nowrap",
            }}
         >
            {name}
         </Box>
      </Box>
   );
};

export default AvatarSectionButton;
