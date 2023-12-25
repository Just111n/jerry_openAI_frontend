import { createSlice } from "@reduxjs/toolkit";
import { APP_SLICE } from "../../constants/common-constants";

export const selectedChatRoomMessageListSlice = createSlice({
  name: APP_SLICE.SELECTED_CHAT_ROOM_MESSAGE_LIST,
  initialState: [], // Assuming this is an array of messages
  reducers: {
    setMessagesForSelectedRoom: (_state, action) => {
      // Replaces the entire array of messages
      return action.payload; // Directly return the new state
    },
    addMessageToSelectedRoom: (state: any, action) => {
      // Adds a new message array to the front of the array of messages
      state.unshift(action.payload); // Use unshift to add to the front of the array
    },

    clearMessagesOfSelectedRoom: () => {
      // Directly clear all messages from the array
      return [];
    },

    updateMessageFeedbackInSelectedRoom: (state: any, action) => {
      // Updates feedback for a specific message
      const messageIndex = state.findIndex(
        (message) => message.id === action.payload.messageId
      );
      if (messageIndex !== -1) {
        state[messageIndex] = {
          ...state[messageIndex],
          feedback: action.payload.feedback,
        };
      }
    },
  },
});

export const {
  setMessagesForSelectedRoom,
  addMessageToSelectedRoom,
  clearMessagesOfSelectedRoom,
  updateMessageFeedbackInSelectedRoom,
} = selectedChatRoomMessageListSlice.actions;

export default selectedChatRoomMessageListSlice.reducer;
