import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    currentUser: null,
    error: false,
    isFetching: false,
    success: true,
    message: null,
  },
  register: {
    error: false,
    isFetching: false,
    success: true,
    message: null,
  },
  logout: {
    error: false,
    isFetching: false,
    success: false,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice;
