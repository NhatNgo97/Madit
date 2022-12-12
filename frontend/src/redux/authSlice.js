import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth";
import userService from "../services/user";

const initialState = {
  persist: JSON.parse(localStorage.getItem("persist") || false),
  user: null,
  accessToken: null,
  login: {
    status: "idle",
    message: null,
  },
  register: {
    status: "idle",
    message: null,
  },
  logout: {
    status: "idle",
    message: null,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsyncUser.pending, (state, action) => {
        state.register.status = "pending";
      })
      .addCase(registerAsyncUser.fulfilled, (state, action) => {
        state.register.status = "succeeded";
        state.register.message = action.payload.message;
      })
      .addCase(registerAsyncUser.rejected, (state, action) => {
        state.register.status = "failed";
        state.register.message = action.payload.message;
      })
      .addCase(loginAsyncUser.pending, (state, action) => {
        state.login.status = "pending";
        state.login.message = "Loading";
      })
      .addCase(loginAsyncUser.fulfilled, (state, action) => {
        state.login.status = "succeeded";
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.login.message = "Login Successfully";
        state.persist = true;
        localStorage.setItem("persist", true);
      })
      .addCase(loginAsyncUser.rejected, (state, action) => {
        state.login.status = "failed";
        state.login.message = action.payload;
      })
      .addCase(logoutAsyncUser.pending, (state, action) => {
        state.logout.status = "pending";
      })
      .addCase(logoutAsyncUser.fulfilled, (state, action) => {
        state.accessToken = null;
        state.user = null;
        state.persist = false;
        localStorage.setItem("persist", false);
      })
      .addCase(loginWithTokenAsyncUser.pending, (state, action) => {
        state.login.status = "pending";
      })
      .addCase(loginWithTokenAsyncUser.fulfilled, (state, action) => {
        state.login.status = "succeeded";
        state.user = action.payload.user;
        state.accessToken = action.payload.token;
        state.login.message = "Login Successfully";
      })
      .addCase(loginWithTokenAsyncUser.rejected, (state, action) => {
        state.login.status = "failed";
        state.login.message = action.payload;
      });
  },
});

//Thunk Actions
export const registerAsyncUser = createAsyncThunk(
  "auth/register",
  async ({ nickname, email, password }) => {
    console.log();
    const res = await authService.register({ nickname, email, password });
    if (res.data.success === true) {
      return { success: true, message: "Register Successfully" };
    } else {
      throw Error(res.data);
    }
  }
);

export const loginAsyncUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      let token = "";
      let user = {};
      const tokenRes = await authService.login({ email, password });
      if (tokenRes.data.success === true) {
        token = tokenRes.data.accessToken;
      } else {
        throw Error(tokenRes.data);
      }
      const userRes = await userService.fetchMe({ token });
      if (userRes.data.success === true) {
        user = userRes.data.user;
        return {
          success: true,
          user: user,
          token: token,
        };
      } else {
        throw Error(userRes.data);
      }
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const logoutAsyncUser = createAsyncThunk("auth/logout", async () => {
  try {
    await authService.logout();
  } catch (err) {
    console.log(err.response.data.message);
  }
});

export const loginWithTokenAsyncUser = createAsyncThunk(
  "auth/loginWithToken",
  async (_, { rejectWithValue }) => {
    try {
      let token = "";
      let user = {};
      const tokenRes = await authService.requestRefreshToken();
      console.log(tokenRes);
      if (tokenRes.data.success === true) {
        token = tokenRes.data.accessToken;
      } else {
        throw Error(tokenRes.data);
      }
      const userRes = await userService.fetchMe({ token });
      if (userRes.data.success === true) {
        user = userRes.data.user;
        return {
          success: true,
          user: user,
          token: token,
        };
      } else {
        throw Error(userRes.data);
      }
    } catch (err) {
      console.log(err.response.data.message);
      return rejectWithValue(err.response.data.message);
    }
  }
);
export default authSlice;
