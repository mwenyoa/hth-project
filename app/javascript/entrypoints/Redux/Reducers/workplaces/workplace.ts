import { createSlice } from "@reduxjs/toolkit";
import { createWorkplace } from "../../Services/workplace";

type Workplace = {
  id: number;
  workplaceData: {
    name: string;
    description: string;
    organization_id: string;
    quicknote: string;
  };
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
        }
});

export default workplaceSlice.reducer;
