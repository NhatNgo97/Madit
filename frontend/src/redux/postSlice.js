import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/post";

const postSlice = createSlice({
  name: "post",
  initialState: {
    allPost: [],
    detailPost: null,
    getAllPost: {
      status: "idle",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostAsyncAction.pending, (state, action) => {})
      .addCase(getAllPostAsyncAction.rejected, (state, action) => {
        state.getAllPost.status = "rejected";
      })
      .addCase(getAllPostAsyncAction.fulfilled, (state, action) => {
        state.getAllPost.status = "succeeded";
        state.allPost = action.payload.posts;
      });
  },
});

//Thunk Actions
export const getAllPostAsyncAction = createAsyncThunk(
  "post/getAllPost",
  async ({ accessToken }) => {
    const res = await postService.getAllPost({ accessToken });
    if (res.data.success === true) {
      return {
        success: true,
        message: "get All Post Successfully",
        posts: res.data.posts,
      };
    } else {
      throw Error(res.data);
    }
  }
);

export default postSlice;
