import { configureStore } from "@reduxjs/toolkit";
import signupUsernameReducer from "./Slices/authUser";
import modalEditPostReducer from "./Slices/modalEditState";
import modalDeletePostReducer from "./Slices/modalDeleteStateIsOpen";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from "redux-persist";

const signupPersistConfig = {
  key: "signupUsername",
  version: 1,
  storage,
  whitelist: ["userName"],
};

const persistedSignupReducer = persistReducer(
  signupPersistConfig,
  signupUsernameReducer
);

export const store = configureStore({
  reducer: {
    signupUsername: persistedSignupReducer,
    modalEditPost: modalEditPostReducer,
    modalDeletePostIsOpen: modalDeletePostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
