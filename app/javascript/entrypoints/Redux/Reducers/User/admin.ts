import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAdmins, createAdmin, deleteAdmin } from "../../Services/admin";

interface adminState {
  admins: any;
  isLoading: "idle" | "pending" | "loaded" | "failed";
  error: string | undefined;
}

const initialState: adminState = {
  admins: [],
  isLoading: "idle",
  error: undefined,
};

 const adminsReducer = createSlice({
  name: "System Admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdmins.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(
      getAdmins.fulfilled,
      (state, { payload }: PayloadAction) => {
        state.admins = payload as any;
        state.isLoading = "loaded";
      }
    );
    builder.addCase(getAdmins.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = "failed";
    });
    builder.addCase(createAdmin.pending, (state) => {
      state.isLoading = "pending";
    });
    builder.addCase(
      createAdmin.fulfilled,
      (state, { payload }: PayloadAction) => {
        state.admins = [...state.admins, payload];
        state.isLoading = 'loaded';
      }
    );
    builder.addCase(createAdmin.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = 'failed'
    })
    builder.addCase(deleteAdmin.pending, (state) => {
        state.isLoading = 'pending';
    })
    builder.addCase(deleteAdmin.fulfilled, (state, action) => {
        const admins = state.admins.filter((admin: any) => admin.id !== action.payload)
        state.admins = admins;
        state.isLoading = 'loaded';
    })
    builder.addCase(deleteAdmin.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = 'failed';
    })
  },
});

export default adminsReducer.reducer;


