import { createSlice } from "@reduxjs/toolkit";
import { createOrganization } from "../../Services/orgenization";



interface Organizations {
    id: string;
    name: string;
    mission: string;
    vison: string;
}

interface OrganizationState {
    organization: Organizations | null;
    loading: boolean;
    error: string | undefined;
}

const initialState = {
    organization: null,
    loading: false,
    error: '',
} as OrganizationState;

const organizationSlice = createSlice({
    name: "Create organization",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createOrganization.pending, state => {
            state.loading = true;
        });
        builder.addCase(createOrganization.fulfilled, (state, action) => {
            state.loading = false;
            state.organization = action.payload;
        });
        builder.addCase(createOrganization.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default organizationSlice.reducer;
