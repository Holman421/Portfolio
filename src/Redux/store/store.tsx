import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../reducers/themeReducer";

const store = configureStore({
   reducer: {
      themeState: themeReducer,
   },
});

export type StoreType = ReturnType<typeof store.getState>;
export default store;
