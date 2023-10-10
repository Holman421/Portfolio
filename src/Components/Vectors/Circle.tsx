import { Box } from "@mui/material";

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
            width: { xs: sizeSmall, md: sizeBig },
            height: { xs: sizeSmall, md: sizeBig },
            top: "0",
            opacity: opacity,
            transform: "translate(-50%, -50%)",
            right: { xs: "-1.75rem", md: "-2.5rem" },
            transition: `width 300ms ease, height 300ms ease${transition}`,
         }}
      >
         {children}
      </Box>
   );
};

export default Circle;
