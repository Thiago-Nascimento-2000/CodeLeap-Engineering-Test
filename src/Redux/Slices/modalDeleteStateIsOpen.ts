import { createSlice } from "@reduxjs/toolkit";

type ModalDeletePostStateIsOpen = {
    isOpen: boolean;
};

const initialState: ModalDeletePostStateIsOpen = {
    isOpen: false,
};

const modalDeletePostSlice = createSlice({
    name: "modalDeletePost",
    initialState,
    reducers: {
        openModalDeletePost: (state: ModalDeletePostStateIsOpen) => {
            state.isOpen = true;
        },
        closeModalDeletePost: (state: ModalDeletePostStateIsOpen) => {
            state.isOpen = false;
        }
    }
})

export const { openModalDeletePost, closeModalDeletePost } = modalDeletePostSlice.actions;
export default modalDeletePostSlice.reducer;