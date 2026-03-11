import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SignupUsernameState = {
    userName: string;
};

const initialState: SignupUsernameState = {
    userName: "",
};

const signupUsernameSlice = createSlice({
    name: "signupUsername",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        }
    }
});

export const { setUserName } = signupUsernameSlice.actions;
export default signupUsernameSlice.reducer;