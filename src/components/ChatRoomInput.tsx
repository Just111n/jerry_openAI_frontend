import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import { useAppSelector } from "../redux/store";

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
  console.log(isBotLoadingResponse);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("submitting prompt");

    // Retrieve existing messages from session storage
    const storedMessages =
      JSON.parse(sessionStorage.getItem("chatMessages") || "") || [];

    // Define the new message you want to add
    const newMessage = {
      isLocalParticipant: true,
      message: "Your new message",
    };

    // Update the messages array
    const updatedMessages = [...storedMessages, newMessage];

    // Save the updated messages back to session storage
    sessionStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e) => {
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
                {/* {isBotLoadingResponse ? <StopIcon /> : <Send />} */}
                <Send />
              </SendIconButton>
            </InputAdornment>
          ),
        }}
      />
    </InputContainer>
  );
};

export default ChatRoomInput;
