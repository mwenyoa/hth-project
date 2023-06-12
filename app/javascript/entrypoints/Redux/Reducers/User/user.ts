import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser, editUser } from "../../Services/user";

type userInfo = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dob: Date;
  city: string;
  occupation: string;
  country: string;
  nationality: string;
  phoneno: string;
  usertype: string;
  created_at: Date;
  picture: string;
};

type adminState = {
  user: userInfo;
  isLoading: "idle" | "pending" | "loaded" | "failed";
  error: string | undefined;
};

const initialState = {
  user: {},
  isLoading: "idle",
  error: undefined,
} as adminState;

const userReducer = createSlice({
  name: "Get User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = "loaded";
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(editUser.pending, (state) => {
        state.isLoading = 'pending'
    });
    builder.addCase(editUser.fulfilled, (state, {payload}: PayloadAction) => {
        state.user = payload as any;
        state.isLoading = 'loaded';
    });
    builder.addCase(editUser.rejected, (state, action) => {
        state.error = action.error.message;
    })
  },
});

export default userReducer.reducer;
