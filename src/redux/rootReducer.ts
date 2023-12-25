import { combineReducers } from "redux";
import isBotLoadingResponseSlice from "./isBotLoadingResponse/isBotLoadingResponseSlice";

const rootReducer = combineReducers({
 
//   selectedChatRoomMessageListReducer: selectedChatRoomMessageListSlice,
 
  isBotLoadingResponseReducer: isBotLoadingResponseSlice,
  
});

export default rootReducer;
