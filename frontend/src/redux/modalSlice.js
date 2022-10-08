import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    registerModal: {
      isOpen: false,
    },
  },
  reducers: {
    openRegisterModal: (state) => {
      state.registerModal.isOpen = true;
    },
    closeRegisterModal: (state) => {
      state.registerModal.isOpen = false;
    },
  },
});

export default modalSlice;
