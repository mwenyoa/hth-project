import {createSlice} from '@reduxjs/toolkit';
import { getHistory } from '../../Services/history';


interface history {
    id: number;
    organization_id: number;
    event_title: string;
    event_date: string;
    description: string;
    image: string;
    link: string;
}

type HistoryState = {
    history: history,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined,
};
const initialState = {
    history: {},
    status: 'idle',
    error: undefined
} as HistoryState;

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHistory.pending, state => {
            state.status = 'loading'
        })
        builder.addCase(getHistory.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.history = action.payload;
        })
        builder.addCase(getHistory.rejected, (state, action) => {
            state.status ='failed';
            state.error = action.error.message
        })
    }
});

export default historySlice.reducer;