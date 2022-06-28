import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (thunkAPI) => {
    try {
      const response = await axios.get("api/posts");

      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async (username, thunkAPI) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ postData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        "api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ post, token }, thunkAPI) => {
    console.log(post)
    console.log(token)
    try {
      const response = await axios.delete(`/api/posts/${post._id}`, {
        headers: { authorization: token },
      });
      console.log(response)
      const data = { data: response.data, status: response.status };
      return data;
    } catch (response) {
      console.log(response)
      // return thunkAPI.rejectWithValue({
      //   data: error.response.data,
      //   status: error.response.status,
      // });
    }
  }
);

export const editPosts = createAsyncThunk(
  "post/editPost",
  async ({ postData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const initialState = {
  allPosts: [],
  userPosts: [],
  status: "idle",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.status = "pending";
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [getAllPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [getUserPost.pending]: (state) => {
      state.status = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userPosts = action.payload.data.posts;
    },
    [getUserPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [createPost.pending]: (state) => {
      state.status = "pending";
    },
    [createPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [createPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [editPosts.pending]: (state) => {
      state.status = "pending";
    },
    [editPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [editPosts.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [deletePost.pending]: (state) => {
      state.status = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
  },
});

export default postSlice.reducer;
