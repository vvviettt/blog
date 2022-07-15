import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "~/api/userApi";

// export const login = createAsyncThunk(
//   "user/login",
//   async (params, thunkAPI) => {
//     const fetchLogin = await userApi.login(params);
//     return fetchLogin;
//   }
// );

const initialState = {
  loading: false,
};

export const postSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {},
});

// Action creators are generated for each case reducer function
export const { logout } = postSlice.actions;

export default postSlice.reducer;
