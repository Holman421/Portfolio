import { Box, Button } from "@mui/material";
import { relative } from "path";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type NavLinkProps = {
   label: string;
   number: string;
   to: string;
};

const NavLink: React.FC<NavLinkProps> = ({ label, number, to }) => {
   const [text, setText] = useState(label);
   const [width, setWidth] = useState(0);

   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };

   const handleMouseOver = () => {
      let iteration = 0;

      const interval = setInterval(() => {
         const newText = text
            .split("")
            .map((letter: any, index: number) => {
               if (index < iteration) {
                  return label[index];
               }

               return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

         setText(newText);

         if (iteration >= label.length) {
            clearInterval(interval);
         }

         iteration += 1 / 2;
      }, 35);
   };

   const handleWidth = () => {
      const computedWidth = label.length * 13 + 40; // adjust the 10 and 80 values as needed
      setWidth(computedWidth);
   };

   useEffect(() => {
      handleWidth();
   }, []);

   return (
      <Box
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         sx={{
            position: "relative",
            display: "block",
            width: `${width}px`,
            "& > button": {
               padding: ".5rem",
               display: "block",
               backgroundColor: "#213C47",
               border: "none",
               fontSize: "1rem",
               width: `${width}px`,
               "&:hover > *": {
                  filter: "drop-shadow(0 0 3px #6FBDED)",
               },
               "& > *": { cursor: "pointer", marginRight: ".8rem" },
               //bottom left corner shape
               ":after": {
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "0",
                  height: "0",
                  borderRight: ".8rem solid transparent",
                  borderBottom: ".8rem solid #111111",
               },
               //top right corner shape
               ":before": {
                  content: '""',
                  position: "absolute !important",
                  top: "0",
                  right: "0",
                  width: "0",
                  height: "0",
                  borderLeft: ".8rem solid transparent",
                  borderTop: ".8rem solid #111111",
               },
            },
         }}
      >
         <button>
            <Link
               to={to}
               smooth={true}
               duration={500}
               onMouseOver={handleMouseOver}
            >
               {text}
            </Link>
         </button>
         <Box
            sx={{
               filter: isHovered ? "drop-shadow(0 0 3px #6FBDED)" : "",
               position: "absolute",
               bottom: "-.6rem",
               left: ".9rem",
            }}
         >
            <Box
               id="BottomLeftShape"
               sx={{
                  backgroundColor: "#6FBDED",
                  width: "2.5rem",
                  height: ".5rem",

                  clipPath:
                     "polygon(0 0, 100% 0, 100% 20%, 30% 20%, 30% 40%, 10% 40%)",
               }}
            />
         </Box>
         <Box
            sx={{
               filter: isHovered ? "drop-shadow(0 0 3px #6FBDED)" : "",
               position: "absolute",
               top: ".0rem",
               right: ".6rem",
            }}
         >
            <Box
               id="TopRightShape"
               sx={{
                  backgroundColor: "#6FBDED",
                  width: "2.5rem",
                  height: ".5rem",
                  clipPath:
                     "polygon(0 0, 91% 0, 100% 40%, 65% 40%, 58% 20%, 0 20%)",
               }}
            />
         </Box>
         <Box
            id="TopLeftShapeParent"
            sx={{
               filter: isHovered ? "drop-shadow(0 0 3px #6FBDED)" : "",
               position: "absolute",
               top: "-.3rem",
               left: ".7rem",
               zIndex: "2",
            }}
         >
            <Box
               id="TopLeftShape"
               sx={{
                  backgroundColor: "#6FBDED",
                  width: "2.5rem",
                  height: ".75rem",

                  zIndex: "2",
                  clipPath:
                     "polygon(5% 0, 95% 0, 100% 30%, 85% 30%, 80% 45%, 20% 45%, 15% 30%, 0 30%)",
               }}
            />
         </Box>
         <Box
            id="TopLeftBlackUnderlineShape"
            sx={{
               position: "absolute",
               backgroundColor: "#111111",
               width: "2.6rem",
               height: ".5rem",
               top: "-.35rem",
               left: ".65rem",
               clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            }}
         />
         <Box
            id="BottomRightShape"
            sx={{
               position: "absolute",
               backgroundColor: "#6FBDED",
               padding: ".0rem .3rem",
               filter: isHovered ? "drop-shadow(0 0 3px #6FBDED)" : "",
               bottom: "-.1rem",
               right: "-.1rem",
               color: "black",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               fontWeight: "600",
               fontSize: ".6rem",
               transform: "skew(-10deg)",
            }}
         >
            {number}
         </Box>
      </Box>
   );
};

export default NavLink;
