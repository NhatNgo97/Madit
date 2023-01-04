import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  modal: modalSlice.reducer,
  post: postSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
