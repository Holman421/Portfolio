import React from "react";
import SkillContainer from "../Components/AvatarSection/SkillContainer";
import SectionWrapper from "../Components/SectionWrapper";

const ContactMeSection: React.FC = () => {
   const CourseaMetaCertificateAH = require("../Assets/CourseaMetaCertificateAH.pdf");
   return (
      <SectionWrapper nameForNavigation="#hero" index={3}>
         contact me
         {/* <SkillContainer
            title="Frontend engineer"
            number="01"
            pdf={CourseaMetaCertificateAH}
            pdfName="Holman_Meta_Certificate"
         /> */}
      </SectionWrapper>
   );
};

export default ContactMeSection;
