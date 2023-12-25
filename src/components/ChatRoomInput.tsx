import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import StopIcon from "@mui/icons-material/Stop";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { addMessageToSelectedRoom } from "../redux/selectedChatRoomMessageList/selectedChatRoomMessageListSlice";
import sendPrompt from "../services/sendPrompt";
import {
  startLoading,
  stopLoading,
} from "../redux/isBotLoadingResponse/isBotLoadingResponseSlice";

const InputContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  position: "sticky",
  bottom: 0,
  borderRadius: "10px",
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.5),
}));
const InputTextField = styled(TextField)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  "& >.MuiInputBase-root": {
    borderRadius: theme.spacing(3),
    paddingRight: theme.spacing(0.5),
  },
}));
const SendIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
const ChatRoomInput = () => {
  const isBotLoadingResponse = useAppSelector(
    (state) => state.isBotLoadingResponseReducer
  );
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      console.log("submitting prompt");

      // Check if the message is empty
      if (message.trim() === "") {
        console.log("Empty message. Not submitting.");
        return; // Exit the function if the message is empty
      }

      const newMessage = {
        isLocalParticipant: true,
        message: message,
      };

      dispatch(addMessageToSelectedRoom(newMessage));
      setMessage("");
      dispatch(startLoading());

      const data = await sendPrompt(message);
      const newMessage2 = {
        isLocalParticipant: false,
        message: data.response,
      };
      dispatch(addMessageToSelectedRoom(newMessage2));
      dispatch(stopLoading());
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <InputContainer component="form" onSubmit={handleSubmit}>
      <InputTextField
        placeholder="Write a message..."
        type="text"
        size="small"
        multiline
        onKeyDown={handleKeyDown}
        maxRows={4}
        value={message}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIconButton size="small" type="submit" aria-label="send">
                {isBotLoadingResponse ? <StopIcon /> : <Send />}
              </SendIconButton>
            </InputAdornment>
          ),
        }}
      />
    </InputContainer>
  );
};

export default ChatRoomInput;
