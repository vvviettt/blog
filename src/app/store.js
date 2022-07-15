import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "~/features/registerSlice";
import authReducer from "~/features/authSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    auth: authReducer,
  },
});
