import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import {
   breakpointLower800px,
   breakpointUp1300px,
} from "../../Utils/HelperFunctions/breakpoints";
import AbstractDescBars from "../AbstractDescBars";
import DemoButton from "./ProjectParts/DemoButton";
import GithubButton from "./ProjectParts/GithubButton";
import ProjectLeftPart from "./ProjectParts/ProjectLeftPart";
import ProjectMobileBottomPart from "./ProjectParts/ProjectMobileBottomPart";
import ProjectRightPart from "./ProjectParts/ProjectRightPart";

type ProjectContainerProps = {
   projectName: string;
   projectNumber: string;
   technologies: string;
   description: string;
   delay: number;
   left: string;
   marginTop: string;
   marginBottom?: string;
};

const ProjectContainer: React.FC<ProjectContainerProps> = ({
   projectName,
   projectNumber,
   technologies,
   description,
   delay,
   left,
   marginTop,
   marginBottom,
}) => {
   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const [isOpen, setIsOpen] = useState(false);
   const [isHovered, setIsHovered] = useState(false);

   return (
      <Box
         ref={ref}
         sx={{
            position: "relative",
            display: "flex",
            width: "fit-content",
            transform: isIntersecting
               ? "translateX(0)"
               : "translateX(calc(-4rem))",
            opacity: isIntersecting ? "1" : "0",
            transition: `all 600ms ease ${delay}ms`,
            left: left,
            marginTop: marginTop,
            ...breakpointLower800px({
               display: "block",
               left: "0",
               marginTop: marginTop,
               transition: "all 300ms ease",
            }),
            ...breakpointUp1300px({
               marginTop: `calc(${marginTop} * 2)`,
            }),
            marginBottom: marginBottom,
         }}
      >
         <ProjectLeftPart
            projectName={projectName}
            projectNumber={projectNumber}
         />

         <DemoButton urlDemo={"http://localhost:3000/"} isOpen={isOpen} />
         <GithubButton urlGithub={"http://localhost:3000/"} isOpen={isOpen} />
         <ProjectRightPart
            technologies={technologies}
            description={description}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsHovered={setIsHovered}
         />
         <ProjectMobileBottomPart
            technologies={technologies}
            description={description}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
         />
         <Box
            sx={{
               position: "absolute",
               top: "-1rem",
               right: "-4.4rem",
               zIndex: "1000",
            }}
         >
            <AbstractDescBars
               display={!isOpen && isHovered}
               typeOfAnimation={2}
            />
            <Box
               sx={{
                  position: "absolute",
                  bottom: "-.1rem",
                  left: "0rem",
                  width: !isOpen && isHovered ? "4rem" : "0",
                  height: ".5px",
                  backgroundColor: "#CF6C29",
                  transition: isOpen
                     ? ""
                     : isHovered
                     ? "all 300ms ease 300ms"
                     : "all 300ms ease",
               }}
            />
            <Box
               sx={{
                  position: "absolute",
                  bottom: "-2.25rem",
                  left: "-2.1rem",
                  width: !isOpen && isHovered ? "3rem" : "0",
                  height: ".5px",
                  backgroundColor: "#CF6C29",
                  transform: "rotate(-45deg)",
                  transformOrigin: "left",
                  transition: isOpen
                     ? ""
                     : isHovered
                     ? "all 300ms ease"
                     : "all 300ms ease 300ms",
               }}
            />
         </Box>
      </Box>
   );
};

export default ProjectContainer;
