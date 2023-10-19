import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../Redux/reducers/themeReducer";
import { StoreType } from "../../Redux/store/store";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import { breakpointUp1300px } from "../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";

const ContactMeButton = () => {
   const { clipPathOutside, clipPathInside } = createClipPath<8>(
      [
         { x: "0%", y: "0% + .5rem" },
         { x: "0% + .5rem", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0% + 1rem" },
         { x: "100%", y: "100% - .5rem" },
         { x: "100% - .5rem", y: "100%" },
         { x: "0% + .5rem", y: "100%" },
         { x: "0%", y: "100% - .5rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const {
      clipPathOutside: clipPathOutsideBig,
      clipPathInside: clipPathInsideBig,
   } = createClipPath<5>(
      [
         { x: "0%", y: "0%" },
         { x: "100% - 1.5rem", y: "0%" },
         { x: "100%", y: "0% + 1.5rem" },
         { x: "100%", y: "100%" },
         { x: "0%", y: "100%" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const descriptionText = useSelectAppropriateText(
      "Let's connect",
      "Kontaktuj mě"
   );

   const font = useSelectAppropriateText(
      "'Orbitron', sans-serif",
      "'Exo 2', sans-serif"
   );

   const isDefaultLanguage = useSelector(
      (state: StoreType) => state.themeState.isDefaultLanguage
   );

   const dispatch = useDispatch();

   return (
      <Box
         ref={ref}
         component="button"
         onClick={() => {
            dispatch(toggleLanguage(!isDefaultLanguage));
         }}
         sx={{
            transform: isIntersecting ? "translateY()" : "translateY(4rem)",
            opacity: isIntersecting ? "1" : "0",
            transition: "all 600ms ease-in, top 500ms ease",
            position: "absolute",
            padding: "1rem 2.5rem",
            width: "13rem",
            height: "3.5rem",
            top: "7.5rem",
            right: "10.4rem",
            background: "#CF6C29",
            clipPath: clipPathOutside,
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...breakpointUp1300px({
               width: "15rem",
               height: "4rem",
               top: "12.3rem",
               right: "16.3rem",
               clipPath: clipPathOutsideBig,
            }),
            "&:hover": { opacity: ".8" },
            "&::before": {
               content: '""',
               position: "absolute",
               background: "linear-gradient(0deg, #ce6c29 0%, #512b10 100%)",
               width: "100%",
               height: "100%",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               clipPath: clipPathInside,
               transition: "all 600ms ease-in",
               ...breakpointUp1300px({
                  clipPath: clipPathInsideBig,
               }),
            },
         }}
      >
         <Box
            sx={{
               zIndex: "50",
               fontSize: "1.25rem",
               whiteSpace: "nowrap",
               fontFamily: font,
            }}
         >
            {descriptionText}
         </Box>
      </Box>
   );
};

export default ContactMeButton;
