import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from "../reducers/avatarReducer";
import themeReducer from "../reducers/themeReducer";

const store = configureStore({
   reducer: {
      themeState: themeReducer,
      avatarState: avatarReducer,
   },
});

export type StoreType = ReturnType<typeof store.getState>;
export default store;
