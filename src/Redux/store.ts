import { configureStore } from "@reduxjs/toolkit";
import signupUsernameReducer from "./Slices/signupUsername";

export const store = configureStore({
    reducer: {
        counter: signupUsernameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;