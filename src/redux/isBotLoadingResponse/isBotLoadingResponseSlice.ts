import { createSlice } from "@reduxjs/toolkit";
import { APP_SLICE } from "../../constants/common-constants";
// Define the initial state
const initialState = false;

// Create the slice
export const isBotLoadingResponseSlice = createSlice({
  name: APP_SLICE.IS_BOT_LOADING_RESPONSE, // Replace with an appropriate name
  initialState,
  reducers: {
    startLoading: () => {
      return true;
    },
    stopLoading: () => {
      return false;
    },
  },
});

// Export the action creators and reducer
export const { startLoading, stopLoading } = isBotLoadingResponseSlice.actions;
export default isBotLoadingResponseSlice.reducer;
