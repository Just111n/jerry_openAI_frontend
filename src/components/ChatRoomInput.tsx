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
import { ChatMessageType } from "../types/types";

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

function createChatMessageObject(
  isLocalParticipant: boolean,
  message: string
): ChatMessageType {
  return { isLocalParticipant, message };
}

const ChatRoomInput = () => {
  const isBotLoadingResponse = useAppSelector(
    (state) => state.isBotLoadingResponseReducer
  );
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    try {
      console.log("Submitting prompt");

      if (message.trim() === "") {
        console.log("Empty message. Not submitting.");
        return;
      }

      const userMessage = createChatMessageObject(true, message);
      dispatch(addMessageToSelectedRoom(userMessage));
      setMessage("");
      dispatch(startLoading());

      const data = await sendPrompt(message);
      const { response } = data;
      const botMessage = createChatMessageObject(false, response);
      dispatch(addMessageToSelectedRoom(botMessage));
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      const botMessage = createChatMessageObject(
        false,
        (error as Error).message
      );
      dispatch(addMessageToSelectedRoom(botMessage));
    } finally {
      dispatch(stopLoading());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
