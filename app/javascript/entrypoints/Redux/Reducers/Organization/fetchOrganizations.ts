import { createSlice } from '@reduxjs/toolkit';
import { getOrganizations } from '../../Services/orgenization';

interface Organizations {
    id: string;
    name: string;
    mission: string;
    vison: string;
}

interface OrganizationState {
    organizations: Organizations[] | null;
    loading: boolean;
    error: string | undefined;
}

const initialState = {
    organizations: null,
    loading: false,
    error: '',
} as OrganizationState;

const organizationsSlice = createSlice({
    name: "Fetch organizations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrganizations.pending, state => {
            state.loading = true;
        });
        builder.addCase(getOrganizations.fulfilled, (state, action) => {
            state.loading = false;
            state.organizations = action.payload;
        });
        builder.addCase(getOrganizations.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default organizationsSlice.reducer;
