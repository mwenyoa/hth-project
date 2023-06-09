import { configureStore } from "@reduxjs/toolkit";
import organizationSlice from "./Redux/Reducers/Organization/createOrganization";
import organizationsSlice from "./Redux/Reducers/Organization/fetchOrganizations";
import historiesReducer from "./Redux/Reducers/History/histories";
import historySlice from "./Redux/Reducers/History/getHistory";
import workplaceSlice from "./Redux/Reducers/workplaces/workplace";
import usersReducer from "./Redux/Reducers/User/usersReducer";
import userLoginReducer from './Redux/Reducers/User/userLogin';
import adminsReducer from './Redux/Reducers/User/admins';
import adminReducer from './Redux/Reducers/User/admin';
import userReducer from './Redux/Reducers/User/user'



const store = configureStore({
  reducer: {
    organization: organizationSlice,
    organizations: organizationsSlice,
    histories: historiesReducer,
    history: historySlice,
    workplace: workplaceSlice,
    users: usersReducer,
    user: userReducer,
    login: userLoginReducer,
    admins: adminsReducer,
    admin: adminReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
