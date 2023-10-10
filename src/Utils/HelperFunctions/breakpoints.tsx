import { SxProps } from "@mui/material";

export const breakpointLower800px = (sx: object) => {
   return {
      "@media (max-width: 800px)": {
         ...sx,
      },
   };
};

export const breakpointUp1200px = (sx: SxProps) => {
   return {
      "@media (min-width: 1200px)": {
         ...sx,
      },
   };
};
