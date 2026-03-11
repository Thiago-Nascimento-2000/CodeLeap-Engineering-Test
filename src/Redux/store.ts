import { configureStore } from "@reduxjs/toolkit";
import signupUsernameReducer from "./Slices/authUser";
import modalEditPostReducer from "./Slices/modalEditState";

export const store = configureStore({
    reducer: {
        signupUsername: signupUsernameReducer,
        modalEditPost: modalEditPostReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;