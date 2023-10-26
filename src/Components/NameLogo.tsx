import { Box } from "@mui/material";
import { breakpointLower650px } from "../Utils/HelperFunctions/breakpoints";

const NameLogo = () => {
   return (
      <Box
         sx={{
            clipPath:
               "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            width: "5.5rem",
            aspectRatio: "1/1",
            position: "absolute",
            top: "2rem",
            left: "2rem",
            background: "linear-gradient(-180deg, #1e9ca5 0%, #0c2e33 100%)",
            zIndex: "2",
            transform: "rotate(22.5deg)",
            transition: "all 600ms ease-in",
            ...breakpointLower650px({
               top: "1rem",
               left: "1rem",
               width: "3rem",
            }),
         }}
      >
         <Box
            sx={{
               clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
               width: "5rem",
               aspectRatio: "1/1",
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               backgroundColor: "black",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               transition: "all 600ms ease-in",
               ...breakpointLower650px({
                  width: "2.7rem",
               }),
            }}
         >
            <Box
               sx={{
                  fontSize: "2rem",
                  transform: "rotate(-22.5deg)",
                  transition: "all 600ms ease-in",
                  ...breakpointLower650px({
                     fontSize: "1rem",
                  }),
               }}
            >
               AH
            </Box>
         </Box>
      </Box>
   );
};

export default NameLogo;
