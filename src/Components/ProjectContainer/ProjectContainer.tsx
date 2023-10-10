import { Box } from "@mui/material";
import React, { useState } from "react";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import {
   breakpointLower800px,
   breakpointUp1200px,
} from "../../Utils/HelperFunctions/breakpoints";
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
   const [isOpen, setIsOpen] = useState(false);
   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

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
            ...breakpointUp1200px({
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
         />
         <ProjectMobileBottomPart
            technologies={technologies}
            description={description}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
         />
      </Box>
   );
};

export default ProjectContainer;
