import { keyframes } from "@mui/material";

export const lightFlickering = () => {
   return keyframes`
  0% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0.2;
  }
  20%, 40%, 60%, 80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
};
