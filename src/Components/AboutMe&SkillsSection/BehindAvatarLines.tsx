import { Box } from "@mui/material";
import React from "react";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import Circle from "../Vectors/Circle";
import Line from "../Vectors/Line";
import AboutMeInfoContainer from "./AboutMeInfoContainer";

type BedingAvatarLinesProps = {
   isIntersecting: boolean;
};

const BehindAvatarLines: React.FC<BedingAvatarLinesProps> = ({
   isIntersecting,
}) => {
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

   const titleDescription = useSelectAppropriateText("Goals", "Cíle");
   const descriptionDescription = useSelectAppropriateText(
      "Becoming a senior frontend developer in remote for a big tech company",
      "Stát se senior frotnend developerem pro velkou zahraniční společnost"
   );

   const handleLineWidth = (width: string) => {
      return isIntersecting ? width : "0";
   };

   const firstTransitionLine = ", width 600ms ease-out 1150ms";
   const secondTransitionCircle = ", opacity 200ms ease 1750ms";
   const thirdTransitionLine = ", width 200ms linear 1950ms";
   const fourthTransitionLine = ", width 200ms linear 2150ms";
   const fifthTransitioContainer = "opacity 300ms ease 2350ms";
   return (
      <Box
         sx={{
            position: "absolute",
            top: "47.5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "29",
         }}
      >
         <Line
            name="Name"
            length={handleLineWidth("clamp(5rem, 17vw, 16rem)")}
            angle="-135deg"
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth("clamp(2rem, 4vw, 5rem)")}
                  angle="-45deg"
                  top={{ xs: "0.1rem", md: "0.2rem" }}
                  left={{ xs: "0.9rem", md: "1.3rem" }}
                  transition={thirdTransitionLine}
               >
                  <Line
                     length={handleLineWidth("clamp(2rem, 3vw, 4rem)")}
                     angle="-135deg"
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleName}
                        description="Aleš Holman"
                        top="0"
                        left="-9rem"
                        angle="-45deg"
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Location"
            length={handleLineWidth("clamp(6rem, 11vw, 12rem)")}
            angle="180deg"
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth("clamp(2rem, 4vw, 5rem)")}
                  angle="0deg"
                  top={{ xs: "0.4rem", md: "0.6rem" }}
                  left={{ xs: "1rem", md: "1.6rem" }}
                  transition={thirdTransitionLine}
               >
                  <Line
                     length={handleLineWidth("clamp(2rem, 3vw, 4rem)")}
                     angle="-135deg"
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleLocation}
                        description={descriptionLocation}
                        top="0"
                        left="-9rem"
                        angle="-45deg"
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Hobbies"
            length={handleLineWidth("clamp(5.5rem, 7vw, 10rem)")}
            angle="135deg"
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth("clamp(2rem, 7vw, 9rem)")}
                  angle="45deg"
                  top={{ xs: ".8rem", md: "1.3rem" }}
                  left={{ xs: ".9rem", md: "1.3rem" }}
                  transition={thirdTransitionLine}
               >
                  <Line
                     length={handleLineWidth("clamp(2rem, 4vw, 5rem)")}
                     angle="135deg"
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleHobbies}
                        description={descriptionHobbies}
                        bottom="-4rem"
                        left="-11rem"
                        angle="45deg"
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Level"
            length={handleLineWidth("clamp(8rem, 9vw, 17rem)")}
            angle="-45deg"
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth("clamp(2rem, 9vw, 8rem)")}
                  angle="45deg"
                  top={{ xs: "0.4rem", md: "1.2rem" }}
                  left={{ xs: "1rem", md: "1.4rem" }}
                  transition={thirdTransitionLine}
               >
                  <Line
                     length={handleLineWidth("clamp(2rem, 3vw, 4rem)")}
                     angle="135deg"
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleLevel}
                        description={descriptionLevel}
                        top="-4.1rem"
                        right="2rem"
                        angle="-135deg"
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Languages"
            length={handleLineWidth("clamp(5rem, 10vw, 11rem)")}
            angle="0deg"
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth("clamp(2rem, 6vw, 7rem)")}
                  angle="0deg"
                  top={{ xs: "0.4rem", md: "0.6rem" }}
                  left={{ xs: "1rem", md: "1.6rem" }}
                  transition={thirdTransitionLine}
               >
                  <Line
                     length={handleLineWidth("clamp(2rem, 2vw, 6rem)")}
                     angle="-135deg"
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleLanguages}
                        description={descriptionLanguages}
                        top="-1.2rem"
                        right="1rem"
                        angle="135deg"
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
         <Line
            name="Description"
            length={handleLineWidth("clamp(8rem, 17vw, 14rem)")}
            angle="45deg"
            transition={firstTransitionLine}
         >
            <Circle
               opacity={isIntersecting ? "1" : "0"}
               transition={secondTransitionCircle}
            >
               <Line
                  length={handleLineWidth("clamp(2rem, 4vw, 5rem)")}
                  angle="-45deg"
                  top={{ xs: "0.4rem", md: "0.1rem" }}
                  left={{ xs: "1rem", md: "1.4rem" }}
                  transition={thirdTransitionLine}
               >
                  <Line
                     length={handleLineWidth("clamp(2rem, 3vw, 4rem)")}
                     angle="-135deg"
                     top="0"
                     right="1px"
                     transformOrigin="right"
                     transition={fourthTransitionLine}
                  >
                     <AboutMeInfoContainer
                        title={titleDescription}
                        description={descriptionDescription}
                        bottom="-4.5rem"
                        right="2rem"
                        angle="135deg"
                        transition={fifthTransitioContainer}
                        opacity={isIntersecting ? "1" : "0"}
                     />
                  </Line>
               </Line>
            </Circle>
         </Line>
      </Box>
   );
};

export default BehindAvatarLines;
