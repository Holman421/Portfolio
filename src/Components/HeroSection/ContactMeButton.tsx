import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../Redux/reducers/themeReducer";
import { StoreType } from "../../Redux/store/store";
import useIsVisible from "../../Utils/CustomHooks/useIsVisible";
import useSelectAppropriateText from "../../Utils/CustomHooks/useSelectAppropriateText";
import { breakpointLower650px } from "../../Utils/HelperFunctions/breakpoints";
import { createClipPath } from "../../Utils/HelperFunctions/createClipPath";

const ContactMeButton = () => {
   const {
      clipPathOutside: clipPathOutsideSmall,
      clipPathInside: clipPathInsideSmall,
   } = createClipPath<8>(
      [
         { x: "0%", y: "0% + .5rem" },
         { x: "0%", y: "0%" },
         { x: "100% - 1rem", y: "0%" },
         { x: "100%", y: "0%" },
         { x: "100%", y: "100% - 1rem" },
         { x: "100% - 1rem", y: "100%" },
         { x: "0% + 1rem", y: "100%" },
         { x: "0%", y: "100% - 1rem" },
      ],
      [
         { x: "+ 1px", y: "+ 1px" },
         { x: "+ 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "+ 1px" },
         { x: "- 1px", y: "- 1px" },
         { x: "- 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
         { x: "+ 1px", y: "- 1px" },
      ]
   );

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

   const [ref, isIntersecting] = useIsVisible({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const descriptionText = useSelectAppropriateText(
      "Show projects",
      "Ukázat projekty"
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
            position: "relative",
            padding: "1rem 2.5rem",
            width: "13rem",
            height: "3.5rem",
            background: "#CF6C29",
            margin: "-.3rem 0 0 5.9rem",
            clipPath: clipPathOutside,
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...breakpointLower650px({
               clipPath: clipPathOutsideSmall,
               width: "14rem",
               height: "2.5rem",
               margin: ".35rem 0 0 2rem",
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
               ...breakpointLower650px({
                  clipPath: clipPathInsideSmall,
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
               ...breakpointLower650px({
                  fontSize: "1rem",
               }),
            }}
         >
            {descriptionText}
         </Box>
      </Box>
   );
};

export default ContactMeButton;
