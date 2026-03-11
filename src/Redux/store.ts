import { configureStore } from "@reduxjs/toolkit";
import signupUsernameReducer from "./Slices/authUser";
import modalEditPostReducer from "./Slices/modalEditState";
import modalDeletePostReducer from "./Slices/modalDeleteStateIsOpen";

export const store = configureStore({
    reducer: {
        signupUsername: signupUsernameReducer,
        modalEditPost: modalEditPostReducer,
        modalDeletePostIsOpen: modalDeletePostReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;