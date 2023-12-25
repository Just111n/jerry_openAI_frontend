import { ReactNode, useEffect, useState } from "react";
import { Box, styled, Fade, Fab } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChatMessage from "./ChatMessage";
import { useAppSelector } from "../redux/store";

const ChatMessagesContainer = styled(Box)(() => ({
  overflow: "auto",
  display: "flex",
  flexDirection: "column-reverse",
  height: "100%",
}));

const DUMMUY_DATA = [
  { isLocalParticipant: true, message: "hello" },
  { isLocalParticipant: true, message: "hello" },
];

function ScrollDown(props: { children: ReactNode; containerId: string }) {
  const { children, containerId } = props;
  const [showButton, setShowButton] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (event: any) => {
    // Get the current scroll position
    const { scrollTop } = event.target;

    // Show button if not at the bottom
    setShowButton(scrollTop < 0);
  };

  useEffect(() => {
    const list = document.getElementById(containerId);
    if (list) {
      list.addEventListener("scroll", handleScroll);
      return () => list.removeEventListener("scroll", handleScroll);
    }
  }, [containerId]);

  const handleClick = () => {
    const list = document.getElementById(containerId);
    if (list) {
      list.scrollTop = list.scrollHeight;
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Fade in={showButton}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "absolute", bottom: 2, left: "50%" }}
        >
          {children}
        </Box>
      </Fade>
    </Box>
  );
}

const ChatRoomMessages = ({ ...boxProps }) => {
  const isBotLoadingResponse = useAppSelector(
    (state) => state.isBotLoadingResponseReducer
  );
  const chatMessagesData = useAppSelector(
    (state) => state.selectedChatRoomMessageListReducer
  );

  const chatMessages = chatMessagesData.map((item, index) => (
    <ChatMessage
      key={index.toString()}
      isLocalParticipant={item.isLocalParticipant}
      message={item.message}
    />
  ));

  return (
    <>
      <ChatMessagesContainer {...boxProps} id="back-to-top-anchor">
        {isBotLoadingResponse && (
          <ChatMessage isLocalParticipant={false} isSkeleton={true} />
        )}
        {chatMessages}
      </ChatMessagesContainer>
      <ScrollDown containerId="back-to-top-anchor">
        <Fab size="small" aria-label="scroll down" color="primary">
          <KeyboardArrowDownIcon />
        </Fab>
      </ScrollDown>
    </>
  );
};

export default ChatRoomMessages;
