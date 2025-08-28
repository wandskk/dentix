import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./_sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
