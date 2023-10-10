import { Box } from "@mui/material";
import React from "react";
import useSelectAppropriateText from "../../../Utils/CustomHooks/useSelectAppropriateText";
import { breakpointLower800px } from "../../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../../Utils/HelperFunctions/createClipPath";

type DemoButtonProps = {
   urlDemo?: string;
   isOpen: boolean;
};

const DemoButton: React.FC<DemoButtonProps> = ({ urlDemo, isOpen }) => {
   const { clipPathOutside, clipPathInside } = createClipPath<5>(
      [
         { x: "0%", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100%" },
         { x: "0%", y: "100%" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const {
      clipPathOutside: clipPathOutsideMobile,
      clipPathInside: clipPathInsideMobile,
   } = createClipPath<5>(
      [
         { x: "0%", y: "0%" },
         { x: "100%", y: "0%" },
         { x: "100%", y: "100%" },
         { x: "0% + 1rem", y: "100%" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const buttonText = useSelectAppropriateText("Demo", "Ukázka");

   const handleClick = () => {
      window.open(urlDemo, "_blank");
   };

   return (
      <Box
         component="button"
         onClick={handleClick}
         sx={{
            position: "absolute",
            bottom: "-.4rem",
            left: "1rem",
            padding: ".5rem 0rem",
            width: "6.9rem",
            cursor: "pointer",
            border: "none",
            background: "#CF6C29",
            visibility: isOpen ? "visible" : "hidden",
            opacity: isOpen ? "1" : "0",
            transition: "visibility 500ms ease-out, opacity 500ms ease-out",
            clipPath: clipPathOutside,
            "&:hover": { opacity: ".8" },
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(0deg, #ce6c29 0%, #512b10 100%)",
               width: "100%",
               height: "100%",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               clipPath: clipPathInside,
               "@media (max-width: 800px)": {
                  clipPath: clipPathInsideMobile,
                  background:
                     "linear-gradient(180deg, #ce6c29 0%, #512b10 100%)",
               },
            },
            ...breakpointLower800px({
               width: "6.35rem",
               bottom: "-1.8rem",
               left: "2rem",
               clipPath: clipPathOutsideMobile,
            }),
         }}
      >
         <Box
            sx={{
               zIndex: "50",
               fontSize: "1rem",
               whiteSpace: "nowrap",
               position: "relative",
            }}
         >
            {buttonText}
         </Box>
      </Box>
   );
};

export default DemoButton;
