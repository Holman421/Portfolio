import { Box } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import ProjectButtons from "./ProjectParts/ProjectButtons";
import ProjectLeftPart from "./ProjectParts/ProjectLeftPart";
import ProjectRightPart from "./ProjectParts/ProjectRightPart";

type ProjectContainerProps = {
   projectName: string;
   projectNumber: string;
   technologies: string;
   description: string;
};

const ProjectContainer: React.FC<ProjectContainerProps> = ({
   projectName,
   projectNumber,
   technologies,
   description,
}) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Box sx={{ display: "flex" }}>
         <ProjectLeftPart
            projectName={projectName}
            projectNumber={projectNumber}
         />

         <ProjectButtons
            variant={"demo"}
            urlDemo={"http://localhost:3000/"}
            isOpen={isOpen}
         />
         <ProjectButtons
            variant={"github"}
            urlGithub={"http://localhost:3000/"}
            isOpen={isOpen}
         />
         <ProjectRightPart
            technologies={technologies}
            description={description}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
         />
      </Box>
   );
};

export default ProjectContainer;
