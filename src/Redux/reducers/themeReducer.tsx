import { createSlice } from "@reduxjs/toolkit";
import { CurrentPageIndex } from "../../Types/Types";

export type themeInitialState = {
   isDarkTheme: boolean;
   currentPageIndex: CurrentPageIndex;
};

const initialState: themeInitialState = {
   isDarkTheme: true,
   currentPageIndex: 0,
};

type UpdateCurrentPageIndex = {
   payload: { index: CurrentPageIndex };
   type: string;
};

const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      toggleTheme: (state) => {
         state.isDarkTheme = true;
      },
      updateCurrentPageIndex: (state, action: UpdateCurrentPageIndex) => {
         const { index } = action.payload;
         state.currentPageIndex = index;
      },
   },
});

export const { toggleTheme, updateCurrentPageIndex } = themeSlice.actions;
export default themeSlice.reducer;
