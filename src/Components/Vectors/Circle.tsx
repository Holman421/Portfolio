import { Box } from "@mui/material";
import { breakpointUp1300px } from "../../Utils/HelperFunctions/breakpoints";

type CircleProps = {
   top?: string;
   left?: string;
   aboutName?: string;
   skillsName?: string;
   children?: React.ReactNode;
   opacity?: string;
   transition?: string;
};

const Circle: React.FC<CircleProps> = ({
   top,
   left,
   children,
   opacity = "1",
   transition,
}) => {
   const sizeBig = "1.75rem";
   const sizeSmall = "1.25rem";
   return (
      <Box
         sx={{
            position: "absolute",
            borderRadius: "50%",
            border: "2px solid #ce6c29",
            width: sizeSmall,
            height: sizeSmall,
            top: "0",
            opacity: opacity,
            transform: "translate(-50%, -50%)",
            right: "-1.75rem",
            transition: `${transition}`,
            ...breakpointUp1300px({
               width: sizeBig,
               height: sizeBig,
               right: "-2.5rem",
            }),
         }}
      >
         {children}
      </Box>
   );
};

export default Circle;
