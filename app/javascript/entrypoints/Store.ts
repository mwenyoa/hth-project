import { configureStore } from "@reduxjs/toolkit";
import organizationSlice from "./Redux/Reducers/createOrganization"

const store = configureStore({
  reducer: {
      organization: organizationSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
