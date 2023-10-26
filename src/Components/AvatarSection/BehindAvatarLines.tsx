import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../../Redux/store/store";
import useScreenSize from "../../Utils/CustomHooks/useScreenSize";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import Circle from "../Vectors/Circle";
import Line from "../Vectors/Line";
import AboutMeInfoContainer from "./AboutMeInfoContainer";
import SkillContainer from "./SkillContainer";

type BedingAvatarLinesProps = {
   isIntersecting: boolean;
};

const BehindAvatarLines: React.FC<BedingAvatarLinesProps> = ({
   isIntersecting,
}) => {
   const CourseaMetaCertificateAH = require("../../Assets/CourseaMetaCertificateAH.pdf");
   const UdemyCSSCertificateAH = require("../../Assets/UdemyCSSCertificateAH.pdf");
   const UdemyJSCertificateAH = require("../../Assets/UdemyJSCertificateAH.pdf");
   const UdemyReactCertificateAH = require("../../Assets/UdemyReactCertificateAH.pdf");
   const UdemyTsCertificateAH = require("../../Assets/UdemyTsCertificateAH.pdf");

   const isAbove800px = useScreenSize(800);

   const titleName = useSelectAppropriateText("Name", "Jméno");

   const titleLocation = useSelectAppropriateText("Location", "Lokace");
   const descriptionLocation = useSelectAppropriateText(
      "Prague in Czech Republic",
      "Praha, původem z Krkonoš"
   );

   const titleHobbies = useSelectAppropriateText("Hobbies", "Koníčky");
   const descriptionHobbies = useSelectAppropriateText(
      "Competetive ballroom dancing, gym and fitness, watching horror films, playing minecraft, listening to music such as Apashe and bbno$",
      "Závodní tancovaní, Posilovna a fitness, sledování filmů, obzvlášť hororů, hraní minecraftu, poslouchání hudby jako Apashe nebo bbno$"
   );

   const titleLevel = useSelectAppropriateText("Level", "Level");
   const descriptionLevel = useSelectAppropriateText(
      "8 months until lvl 25",
      "8 měsíců do 25 levelu"
   );

   const titleLanguages = useSelectAppropriateText("Languages", "Jazyky");
   const descriptionLanguages = useSelectAppropriateText(
      "Advanced english, native czech",
      "Pokročilá angličtina, rodilá češina"
   );

   const titleGoals = useSelectAppropriateText("Goals", "Cíle");
   const descriptionGoals = useSelectAppropriateText(
      "Becoming a senior frontend developer in remote for a big tech company",
      "Stát se senior frotnend developerem pro velkou zahraniční společnost"
   );

   const { selectedMode } = useSelector(
      (state: StoreType) => state.avatarState
   );

   const handleLineWidth = (widthAboutMe: string, widthSkills: string) => {
      if (!isIntersecting) {
         return "0";
      }
      if (selectedMode === "aboutMe") {
         return widthAboutMe;
      }
      return widthSkills;
   };

   const firstTransitionLine = "all 600ms ease-out 1150ms";
   const secondTransitionCircle = "all 200ms ease 1750ms";
   const thirdTransitionLine = "all 200ms linear 1950ms";
   const fourthTransitionLine = "all 200ms linear 2150ms";
   const fifthTransitioContainer = "all 300ms ease 2350ms";

   const handleValuesForModes = (angleAboutMe: string, angleSkills: string) => {
      if (selectedMode === "aboutMe") {
         return angleAboutMe;
      }
      return angleSkills;
   };
   return (
      <Box
         sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "29",
         }}
      >
         <Line
            name="Name/React.js"
            length={handleLineWidth(
               "clamp(5rem, 15vw, 16rem)",
               "clamp(5rem, 10vw, 16rem)"
            )}
            angle={handleValuesForModes("-135deg", "-180deg")}
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(2rem, 5vw, 5rem)",
                     "clamp(2rem, 4vw, 5rem)"
                  )}
                  angle={handleValuesForModes("-45deg", "0")}
                  top={handleValuesForModes("0.1rem", ".5rem")}
                  topBig={handleValuesForModes("0.2rem", ".65rem")}
                  left={handleValuesForModes("0.9rem", "1rem")}
                  leftBig={handleValuesForModes("1.3rem", "1.5rem")}
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(2rem, 6vw, 4rem)",
                        "clamp(2rem, 3vw, 4rem)"
                     )}
                     angle={handleValuesForModes("-135deg", "-225deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleName}
                        description="Aleš Holman"
                        top=".7rem"
                        topBig="0rem"
                        left="-9rem"
                        leftBig="-12rem"
                        angle={handleValuesForModes("-45deg", "0deg")}
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                     <SkillContainer
                        title="React.js"
                        number="01"
                        pdf={UdemyReactCertificateAH}
                        pdfName="Holman_Meta_Certificate"
                        angle={handleValuesForModes("0deg", "45deg")}
                        top="-6.6rem"
                        left="-11.3rem"
                        topBig="-7rem"
                        leftBig="-14.5rem"
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="React.js"
            length={handleLineWidth(
               "clamp(5rem, 12vw, 16rem)",
               "clamp(5rem, 13vw, 16rem)"
            )}
            angle={handleValuesForModes("-90deg", "-135deg")}
            transition={firstTransitionLine}
            opacity={handleValuesForModes("0", "1")}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(2rem, 6vw, 5rem)",
                     "clamp(2rem, 6vw, 5rem)"
                  )}
                  angle={handleValuesForModes("-45deg", "-45deg")}
                  top={handleValuesForModes("0.1rem", ".1rem")}
                  topBig={handleValuesForModes("0.2rem", ".2rem")}
                  left={handleValuesForModes("0.9rem", ".9rem")}
                  leftBig={handleValuesForModes("1.3rem", "1.3rem")}
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(2rem, 3vw, 4rem)",
                        "clamp(2rem, 3vw, 4rem)"
                     )}
                     angle={handleValuesForModes("-135deg", "-225deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <SkillContainer
                        title="Frontend Developer"
                        number="01"
                        pdf={CourseaMetaCertificateAH}
                        pdfName="Holman_Meta_Certificate"
                        angle={handleValuesForModes("0deg", "45deg")}
                        top="-6.6rem"
                        left="-11rem"
                        topBig="-7rem"
                        leftBig="-14.5rem"
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Location/Javascript"
            length={handleLineWidth(
               "clamp(4rem, 11vw, 12rem)",
               "clamp(4rem, 13vw, 12rem)"
            )}
            angle={handleValuesForModes("180deg", "135deg")}
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(2rem, 4vw, 5rem)",
                     "clamp(2rem, 6vw, 5rem)"
                  )}
                  angle={handleValuesForModes("0deg", "45deg")}
                  top={handleValuesForModes("0.4rem", ".8rem")}
                  topBig={handleValuesForModes("0.6rem", "1.2rem")}
                  left={handleValuesForModes("1rem", ".9rem")}
                  leftBig={handleValuesForModes("1.6rem", "1.3rem")}
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(2rem, 7vw, 4rem)",
                        "clamp(2rem, 3vw, 4rem)"
                     )}
                     angle={handleValuesForModes("-135deg", "-225deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleLocation}
                        description={descriptionLocation}
                        top=".7rem"
                        topBig=".2rem"
                        left="-9rem"
                        leftBig="-12.5rem"
                        angle={handleValuesForModes("-45deg", "0deg")}
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                     <SkillContainer
                        title="Javascript"
                        number="01"
                        pdf={UdemyJSCertificateAH}
                        pdfName="Holman_Meta_Certificate"
                        angle={handleValuesForModes("0", "45deg")}
                        top="-6.5rem"
                        left="-11rem"
                        topBig="-7rem"
                        leftBig="-14.5rem"
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Goals"
            length={handleLineWidth(
               "clamp(4.5rem, 17vw, 18rem)",
               "clamp(4.5rem, 13vw, 11rem)"
            )}
            angle={handleValuesForModes("135deg", "90deg")}
            transition={firstTransitionLine}
            opacity={handleValuesForModes("1", "0")}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(2rem, 6vw, 13rem)",
                     "clamp(2rem, 7vw, 13rem)"
                  )}
                  angle={handleValuesForModes("45deg", "45deg")}
                  top={handleValuesForModes(".8rem", ".1rem")}
                  topBig="1.3rem"
                  left={handleValuesForModes(".9rem", ".9rem")}
                  leftBig="1.3rem"
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(1rem, 1vw, 5rem)",
                        "clamp(1rem, 2vw, 5rem)"
                     )}
                     angle={handleValuesForModes("225deg", "135deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleGoals}
                        description={descriptionGoals}
                        top="-.8rem"
                        topBig="-1.2rem"
                        left="-10.5rem"
                        leftBig="-14.5rem"
                        angle={handleValuesForModes("-45deg", "0")}
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Level"
            length={handleLineWidth(
               "clamp(5rem, 17vw, 17rem)",
               "clamp(4rem, 8vw, 17rem)"
            )}
            angle={handleValuesForModes("-45deg", "-90deg")}
            transition={firstTransitionLine}
            opacity={handleValuesForModes("1", "0")}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(1rem, 5vw, 8rem)",
                     "clamp(1rem, 7vw, 8rem)"
                  )}
                  angle={handleValuesForModes("45deg", "45deg")}
                  top={handleValuesForModes("0.8rem", "0.1rem")}
                  topBig="1.2rem"
                  left={handleValuesForModes("1rem", ".9rem")}
                  leftBig="1.4rem"
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(1rem, 2vw, 4rem)",
                        "clamp(2rem, 5vw, 15rem)"
                     )}
                     angle={handleValuesForModes("225deg", "135deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleLevel}
                        description={descriptionLevel}
                        top="-.6rem"
                        topBig="-0.5rem"
                        left="-9.5rem"
                        leftBig="-12.5rem"
                        angle={handleValuesForModes("135deg", "180deg")}
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Languages/CSS"
            length={handleLineWidth(
               "clamp(5rem, 10vw, 11rem)",
               "clamp(5rem, 15vw, 11rem)"
            )}
            angle={handleValuesForModes("0", "-45deg")}
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(2rem, 6vw, 7rem)",
                     "clamp(2rem, 6vw, 7rem)"
                  )}
                  angle={handleValuesForModes("0deg", "45deg")}
                  top={handleValuesForModes(".4rem", ".8rem")}
                  topBig={handleValuesForModes(".6rem", "1.2rem")}
                  left={handleValuesForModes("1rem", ".9rem")}
                  leftBig={handleValuesForModes("1.6rem", "1.3rem")}
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(1rem, 2vw, 4rem)",
                        "clamp(1rem, 2vw, 4rem)"
                     )}
                     angle={handleValuesForModes("-135deg", "-225deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleLanguages}
                        description={descriptionLanguages}
                        top="-1.2rem"
                        topBig="-0.75rem"
                        left="-10rem"
                        leftBig="-14.7rem"
                        angle={handleValuesForModes("135deg", "180deg")}
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                     <SkillContainer
                        title="CSS-SASS-MUI"
                        number="01"
                        pdf={UdemyCSSCertificateAH}
                        pdfName="Holman_Meta_Certificate"
                        angle={handleValuesForModes("-180deg", "-135deg")}
                        top="-4.1rem"
                        left="-9.5rem"
                        topBig="-5.95rem"
                        leftBig="-14.2rem"
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Hobbies/Typescript"
            length={handleLineWidth(
               "clamp(6rem, 16.5vw, 14rem)",
               "clamp(4rem, 10vw, 14rem)"
            )}
            angle={handleValuesForModes("45deg", "0")}
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(1rem, 4vw, 12rem)",
                     "clamp(1rem, 4vw, 12rem)"
                  )}
                  angle={handleValuesForModes("-45deg", "0deg")}
                  top={handleValuesForModes("0rem", ".5rem")}
                  topBig={handleValuesForModes("0.1rem", ".7rem")}
                  left={handleValuesForModes(".9rem", "1rem")}
                  leftBig={handleValuesForModes("1.4rem", "1.6rem")}
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(2rem, 2vw, 7rem)",
                        "clamp(2rem, 2vw, 4rem)"
                     )}
                     angle={handleValuesForModes("-135deg", "-225deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleHobbies}
                        description={descriptionHobbies}
                        top="-3.1rem"
                        topBig="-3.7rem"
                        left="-10.5rem"
                        leftBig="-15.75rem"
                        angle={handleValuesForModes("135deg", "180deg")}
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />

                     <SkillContainer
                        title="Typescript"
                        number="01"
                        pdf={UdemyTsCertificateAH}
                        pdfName="Holman_Meta_Certificate"
                        angle={handleValuesForModes("-180deg", "-135deg")}
                        top="-4.1rem"
                        left="-9.5rem"
                        topBig="-5.95rem"
                        leftBig="-14rem"
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Figma"
            length={handleLineWidth(
               "clamp(6rem, 10vw, 14rem)",
               "clamp(6rem, 14.5vw, 16rem)"
            )}
            angle={handleValuesForModes("90deg", "45deg")}
            transition={firstTransitionLine}
            opacity={handleValuesForModes("0", "1")}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth(
                     "clamp(1rem, 6vw, 12rem)",
                     "clamp(1rem, 4vw, 12rem)"
                  )}
                  angle={handleValuesForModes("-45deg", "-45deg")}
                  top={handleValuesForModes("0rem", "0rem")}
                  topBig="0.1rem"
                  left={handleValuesForModes(".9rem", ".9rem")}
                  leftBig="1.4rem"
                  transition={thirdTransitionLine}
                  shouldRender={isAbove800px}
               >
                  <Line
                     length={handleLineWidth(
                        "clamp(2rem, 6vw, 7rem)",
                        "clamp(2rem, 2vw, 4rem)"
                     )}
                     angle={handleValuesForModes("-135deg", "-225deg")}
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <SkillContainer
                        title="Figma"
                        number="01"
                        pdf={CourseaMetaCertificateAH}
                        pdfName="Holman_Meta_Certificate"
                        angle={handleValuesForModes("-180deg", "-135deg")}
                        top="-4.1rem"
                        left="-9.5rem"
                        topBig="-5.95rem"
                        leftBig="-14.2rem"
                        isComplete={false}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
      </Box>
   );
};

export default BehindAvatarLines;
