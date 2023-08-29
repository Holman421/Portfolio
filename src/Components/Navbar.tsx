import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

type NavbarLinkProps = {
   label: string;
   to: string;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, to }) => {
   const [text, setText] = useState(label);
   const [width, setWidth] = useState(0);

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

         iteration += 1 / 4;
      }, 20);
   };

   const handleWidth = () => {
      const computedWidth = label.length * 10 + 40; // adjust the 10 and 80 values as needed
      setWidth(computedWidth);
   };

   useEffect(() => {
      handleWidth();
   }, []);

   return (
      <Box sx={{ width: `${width}px`, "& > *": { cursor: "pointer" } }}>
         <Link
            to={to}
            smooth={true}
            duration={500}
            onMouseOver={handleMouseOver}
            // onMouseEnter={handleWidth}
         >
            {text}
         </Link>
      </Box>
   );
};

const Navbar = () => {
   return (
      <Box
         component="nav"
         sx={{
            display: "flex",
            gap: "1rem",
            marginRight: "2rem",
         }}
      >
         <NavbarLink label="PROJECTS" to="#projects" />
         <NavbarLink label="SKILLS" to="#skills" />
         <NavbarLink label="ABOUT.ME" to="#aboutMe" />
         <NavbarLink label="TIMELINE" to="#timeline" />
         <NavbarLink label="CONTACT.ME" to="#contactMe" />
      </Box>
   );
};

export default Navbar;
