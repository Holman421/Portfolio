import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../Redux/reducers/themeReducer";
import { StoreType } from "../Redux/store/store";
import useSelectAppropriateText from "../Utils/CustomHooks/useSelectAppropriateText";
import { createClipPath } from "../Utils/HelperFunctions/createClipPath";

const LanguageSwitcher = () => {
   const isDefaultLanguage = useSelector(
      (state: StoreType) => state.themeState.isDefaultLanguage
   );

   const dispatch = useDispatch();

   const { clipPathOutside, clipPathInside } = createClipPath<8>(
      [
         { x: "0%", y: "0% + .25rem" },
         { x: "0% + .25rem", y: "0%" },
         { x: "100% - .25rem", y: "0%" },
         { x: "100%", y: "0% + .25rem" },
         { x: "100%", y: "100% - .25rem" },
         { x: "100% - .25rem", y: "100%" },
         { x: "0% + .25rem", y: "100%" },
         { x: "0%", y: "100% - .25rem" },
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

   const descriptionText = useSelectAppropriateText("CZ", "ENG");

   return (
      <Box
         component={"button"}
         onClick={() => {
            dispatch(toggleLanguage(!isDefaultLanguage));
         }}
         sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            border: "none",
            background: "#CF6C29",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            clipPath: clipPathOutside,
            padding: ".2rem .5rem",
            cursor: "pointer",
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
            },
         }}
      >
         <Box
            sx={{
               zIndex: "50",
               fontSize: ".8rem",
               whiteSpace: "nowrap",
            }}
         >
            {descriptionText}
         </Box>
      </Box>
   );
};

export default LanguageSwitcher;
