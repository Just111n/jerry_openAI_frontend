import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "./rootReducer";

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});


// Re-export useSelector and useDispatch hooks
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default store;
