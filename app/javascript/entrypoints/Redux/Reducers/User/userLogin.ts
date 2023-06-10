import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../Services/user";



type userLogin = {
    loggedin: {},
    isLoaded: 'idle' | 'pending' | 'succeeded' | 'failed' 
    error: string | undefined
}

const initialState = {
    loggedin: {},
    isLoaded: 'idle',
    error: ""
} as userLogin;

const userLoginReducer = createSlice({
    name: 'User Login',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
       builder.addCase(loginUser.pending, (state) => {
        state.isLoaded = 'pending'
       })
       builder.addCase(loginUser.fulfilled, (state, action) => {
         state.isLoaded = 'succeeded'
         state.loggedin = action.payload;
       })
       builder.addCase(loginUser.rejected, (state, action) => {
          state.isLoaded = 'failed'
          state.error = action.error.message
       })
    }
})

export default userLoginReducer.reducer;