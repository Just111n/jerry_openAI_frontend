import { Divider, Paper, styled } from "@mui/material";
import ChatRoomInput from "./ChatRoomInput";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatRoomMessages from "./ChatRoomMessages";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  borderRadius: "16px",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
}));

const ChatRoom = () => {
  return (
    <StyledPaper>
      <ChatRoomHeader />
      <Divider />
      <ChatRoomMessages />
      <ChatRoomInput />
    </StyledPaper>
  );
};

export default ChatRoom;
