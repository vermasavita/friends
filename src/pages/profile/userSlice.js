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

// export const followUser = createAsyncThunk("post/follow", async (thunkAPI) => {
//   try {
//     const response = await axios.post(
//       `/api/users/follow/${followUserId}`,
//       {},
//       { headers: { authorization: token } }
//     );
//     const data = { data: response.data, status: response.status };
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue({
//       data: error.response.data,
//       status: error.response.status,
//     });
//   }
// });

// export const unfollowUser = createAsyncThunk(
//   "post/follow",
//   async (thunkAPI) => {
//     try {
//       const response = await axios.post(
//         `/api/users/unfollow/${followUserId}`,
//         {},
//         { headers: { authorization: token } }
//       );
//       const data = { data: response.data, status: response.status };
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         data: error.response.data,
//         status: error.response.status,
//       });
//     }
//   }
// );

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
    // [followUser.pending]: (state) => {
    //   state.status = "pending";
    // },
    // [followUser.fulfilled]: (state, action) => {
    //   state.status = "fulfilled";
    //   state.allUsers = action.payload.data.users;
    // },
    // [followUser.rejected]: (state, action) => {
    //   state.status = "rejected";
    //   console.error(action.payload.data.errors[0]);
    // },
    // [unfollowUser.pending]: (state) => {
    //   state.status = "pending";
    // },
    // [unfollowUser.fulfilled]: (state, action) => {
    //   state.status = "fulfilled";
    //   state.allUsers = action.payload.data.users;
    // },
    // [unfollowUser.rejected]: (state, action) => {
    //   state.status = "rejected";
    //   console.error(action.payload.data.errors[0]);
    // },
  },
});

export const { reducer: usersReducer } = userSlice;
