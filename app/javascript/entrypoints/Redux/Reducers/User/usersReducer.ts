import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteUser, fetchUsers, createUser } from '../../Services/user';

interface userInfo {
    id: number
    firstname: string;
    lastname: string;
    email: string;
    dob: string;
    city: string;
    country: string;
    nationality: string;
    phoneno: string;
    usertype: string
    organization_id: number;
    picture: string;
    created_at: Date;
}
 type UserState = {
   users: userInfo[],
   isloading: 'idle' | 'pending' | 'loaded' | 'failed'
   error: string | undefined
 }

const initialState = {
     users: [],
     isloading: 'idle',
     error: undefined
} as UserState

const usersReducer = createSlice({
    name: 'Users Info',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, state => {
            state.isloading = 'pending'
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isloading = 'loaded'
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
            state.isloading = 'failed'
        })
        builder.addCase(createUser.pending, state => {
            state.isloading = 'pending';
        })
        builder.addCase(createUser.fulfilled, (state, {payload}: PayloadAction) => {
            state.users = [...state.users as any[], payload]
            state.isloading = 'loaded'
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.error = action.error.message;
            state.isloading = 'failed';
        })
        builder.addCase(deleteUser.pending, (state) => {
            state.isloading = 'pending';
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isloading = 'loaded';
            state.users = state.users.filter((user: any) => user.id !== action.payload);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.error = action.error.message;
            state.isloading = 'failed';
        })
    }
})

export default usersReducer.reducer;