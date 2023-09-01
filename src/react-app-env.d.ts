/// <reference types="react-scripts" />

declare module "react-scroll";
declare module "three";

import { SxProps } from "@mui/system";

declare module "@mui/system" {
   interface SxProps {
      [key: string]: any;
   }
}
