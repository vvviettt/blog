import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postApi from "~/api/postApi";

export const uploadImage = createAsyncThunk(
  "post/uploadImage",
  async (params) => {
    const upload = await postApi.uploadImage(params);
    return upload;
  }
);

export const uploadPost = createAsyncThunk(
  "post/uploadPost",
  async (params) => {
    const result = await postApi.uploadPost(params);
    return result;
  }
);

export const getListPostsForMe = createAsyncThunk(
  "post/getListPosts",
  async () => {
    const result = await postApi.getListPostsForMe();
    return result;
  }
);

export const getPost = createAsyncThunk("post/getPost", async (params) => {
  const result = await postApi.getPost(params);
  return result;
});

export const getOnePost = createAsyncThunk(
  "post/getOnePost",
  async (params) => {
    const result = await postApi.getOnePost(params);
    return result;
  }
);

export const deletePostsForMe = createAsyncThunk(
  "post/delete",
  async (params, thunkAPI) => {
    const result = await postApi.deletePostsForMe(params);
    await thunkAPI.dispatch(getListPostsForMe());
    return result;
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (params) => {
    const result = await postApi.updatePost({
      id: params.id,
      content: params.content,
      title: params.title,
    });
    return result;
  }
);

const initialState = {
  postForMe: [],
  posts: [],
  like: 0,
  loading: false,
};

export const postSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: {
    [getListPostsForMe.pending]: (state) => {
      state.loading = true;
    },
    [getListPostsForMe.rejected]: (state, action) => {
      state.loading = false;
    },
    [getListPostsForMe.fulfilled]: (state, action) => {
      if (!action.payload.error) {
        state.loading = false;
        state.postForMe = action.payload.posts;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = postSlice.actions;

export default postSlice.reducer;
