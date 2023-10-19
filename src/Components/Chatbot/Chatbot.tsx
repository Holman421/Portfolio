import { Box } from "@mui/material";
import React from "react";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";

type ChatBotProps = {
   isIntersecting: boolean;
};

const Chatbot: React.FC<ChatBotProps> = ({ isIntersecting }) => {
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
         sx={{
            display: isIntersecting ? "none" : "flex",
            position: "fixed",
            bottom: "1rem",
            right: "1.5rem",
            width: "3rem",
            height: "3rem",
            transition: "all 500ms ease",
            background: "#CF6C29",
            clipPath: clipPathOutside,
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(180deg, #ce6c29 0%, #512b10 100%)",
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
               fontSize: "1.25rem",
               whiteSpace: "nowrap",

               //  fontFamily: font,
            }}
         >
            01
         </Box>
      </Box>
   );
};

export default Chatbot;
