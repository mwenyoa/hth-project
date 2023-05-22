import { configureStore } from "@reduxjs/toolkit";
import organizationSlice from "./Redux/Reducers/Organization/createOrganization"
import organizationsSlice from './Redux/Reducers/Organization/fetchOrganizations';
import historiesReducer from './Redux/Reducers/History/histories';
import historySlice from './Redux/Reducers/History/getHistory';



const store = configureStore({
  reducer: {
      organization: organizationSlice,
      organizations:organizationsSlice,
      histories:historiesReducer,
      history:historySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
