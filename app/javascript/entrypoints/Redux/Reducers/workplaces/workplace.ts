import { createSlice } from "@reduxjs/toolkit";
import { createWorkplace, fetchWorkplaces } from "../../Services/workplace";

interface Workplace  {
  id: number;
    name: string;
    description: string;
    organization_id: string;
    quicknote: string;
    workplace_images: [
      {id: number,
        url: string
      }
    ]
};

type WorkplaceState = {
  workplace: Workplace[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | undefined;
};

const initialState = {
  workplace: [],
  status: "idle",
  error: undefined
} as WorkplaceState;

const workplaceSlice = createSlice({
    name: "workplace",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createWorkplace.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(createWorkplace.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.workplace = action.payload;
        });
        builder.addCase(createWorkplace.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
        builder.addCase(fetchWorkplaces.pending, state => {
          state.status = 'pending';
        })
        builder.addCase(fetchWorkplaces.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.workplace = action.payload;
        })
        builder.addCase(fetchWorkplaces.rejected, (state, action) => {
          state.error = action.error.message;
          state.status = 'failed';
        })
        }
});

export default workplaceSlice.reducer;
