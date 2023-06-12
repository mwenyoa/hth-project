import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAdmin } from "../../Services/admin";

type adminInfo = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  photo: string;
  created_at: Date;
  confirmed_at: Date;
};

type adminState = {
  admin: adminInfo;
  isLoading: "idle" | "pending" | "loaded" | "failed";
  error: string | undefined;
};

const initialState = {
  admin: {},
  isLoading: "idle",
  error: undefined,
} as adminState;

const adminReducer = createSlice({
  name: "Get Admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdmin.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(getAdmin.fulfilled, (state, action) => {
      state.isLoading = "loaded"
      state.admin = action.payload;
    });
    builder.addCase(getAdmin.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default adminReducer.reducer;
