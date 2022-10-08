import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  modal: modalSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
