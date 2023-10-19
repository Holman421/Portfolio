import { Box } from "@mui/material";
import React from "react";

type ChatBotProps = {
  isIntersecting: boolean;
};

const Chatbot: React.FC<ChatBotProps> = ({ isIntersecting }) => {
   return (
      <Box
         sx={{
            display: isIntersecting ? "none" : "block",
            position: "fixed",
            bottom: "1rem",
            right: "1.5rem",
            padding: "1rem",
            background: "red",
            width: "fit-content",
            transition: "all 500ms ease",
         }}
      >
         Chatbot
      </Box>
   );
};

export default Chatbot;
