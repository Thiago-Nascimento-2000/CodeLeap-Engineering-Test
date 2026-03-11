import { createSlice } from "@reduxjs/toolkit";

type ModalEditPostState = {
    isOpen: boolean;
};

const initialState: ModalEditPostState = {
    isOpen: false,
};

const modalEditPostSlice = createSlice({
    name: "modalEditPost",
    initialState,
    reducers: {
        openModalEditPost: (state: ModalEditPostState) => {
            state.isOpen = true;
        },
        closeModalEditPost: (state: ModalEditPostState) => {
            state.isOpen = false;
        }
    }
})

export const { openModalEditPost, closeModalEditPost } = modalEditPostSlice.actions;
export default modalEditPostSlice.reducer;