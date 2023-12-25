import { combineReducers } from "redux";
import isBotLoadingResponseSlice from "./isBotLoadingResponse/isBotLoadingResponseSlice";
import selectedChatRoomMessageListSlice from "./selectedChatRoomMessageList/selectedChatRoomMessageListSlice";

const rootReducer = combineReducers({
 
  selectedChatRoomMessageListReducer: selectedChatRoomMessageListSlice,
 
  isBotLoadingResponseReducer: isBotLoadingResponseSlice,
  
});

export default rootReducer;
