import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../utils/axiosInstance";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

// Login User
export const loginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await authRequest.post("/login", {
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// register user
export const registerUser = createAsyncThunk(
  "user/registerUSer",
  async (user, thunkAPI) => {
    try {
      const response = await authRequest.post("/register", {
        fullname: user.fullname,
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// Check user login
export const checkUserLogin = createAsyncThunk(
  "user/me",
  async (user, thunkAPI) => {
    try {
      const { data } = await authRequest.get("/me");
      return data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    // Builder Login User
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.message = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    // Builder check user login
    builder.addCase(checkUserLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.message = null;
    });
    builder.addCase(checkUserLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    // Builder Register User
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
