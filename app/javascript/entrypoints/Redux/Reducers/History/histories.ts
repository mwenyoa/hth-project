import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { postHistory,  getHistories, deleteHistory } from '../../Services/history';

interface historyType {
    history: any,
    isLoading: 'idle' | 'pending' |  'succeeded' | 'failed',
    error:  string | undefined
}

const initialState = {
    history: [],
    isLoading: 'idle',
    error: undefined
} as historyType;

const historiesReducer = createSlice({
   name: 'Histories',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
    builder.addCase(postHistory.pending, state => {
        state.isLoading = 'pending'
    })
    builder.addCase(postHistory.fulfilled, (state, {payload}: PayloadAction) => {
        state.isLoading = 'succeeded';
        state.history =  [...state.history as any[], payload ]
        window.history.pushState(null, '', '/#/our-history')
        window.location.reload()
    })
    builder.addCase(postHistory.rejected, (state, action) => {
        state.isLoading ='failed';
        state.error = action.error.message
    })
    builder.addCase(getHistories.pending, state => {
        state.isLoading = 'pending'
    }
    )
    builder.addCase(getHistories.fulfilled, (state, {payload}:PayloadAction) => {
        state.isLoading = 'succeeded';
        state.history = payload;
    }
    )
    builder.addCase(getHistories.rejected, (state, action) => {
        state.isLoading ='failed';
        state.error = action.error.message
    }
    )
    builder.addCase(deleteHistory.pending, state => {
        state.isLoading = 'pending';
    })
    builder.addCase(deleteHistory.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.history = state.history.filter((hist: any) => hist.id !== action.payload)
        window.location.reload()
    })
    builder.addCase(deleteHistory.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message
    })
   }
})

export default historiesReducer.reducer;