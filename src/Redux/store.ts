import { configureStore } from "@reduxjs/toolkit";
import signupUsernameReducer from "./Slices/signupUsername";
import modalEditPostReducer from "./Slices/modalEditPost";

export const store = configureStore({
    reducer: {
        signupUsername: signupUsernameReducer,
        modalEditPost: modalEditPostReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;