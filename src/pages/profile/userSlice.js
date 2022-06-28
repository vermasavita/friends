import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("post/getUser", async (thunkAPI) => {
  try {
    const response = await axios.get("/api/users");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      data: error.response.data,
      status: error.response.status,
    });
  }
});

const initialState = {
  allUsers: [],
  status: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "pending";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allUsers = action.payload.data.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { reducer: usersReducer } = userSlice;
