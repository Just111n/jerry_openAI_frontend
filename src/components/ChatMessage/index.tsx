import { Avatar, Box } from "@mui/material";
import TextMessage from "./TextMessage";
import TextMessageSkeleton from "./TextMessageSkeleton";

const ChatMessage = ({
  isLocalParticipant = false,
  message = "",
  isSkeleton = false,
}) => {
  return (
    <>
      <Box sx={{ paddingY: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <Box sx={{ width: "30px", height: "30px", paddingTop: 1 }}>
            <Avatar
              src={
                isLocalParticipant
                  ? "/static/images/avatar/1.jpg"
                  : `../../../vite.svg`
              }
              alt={isLocalParticipant ? "email" : "Saola"}
              sx={{ width: "30px", height: "30px" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
            {isSkeleton ? (
              <TextMessageSkeleton />
            ) : (
              <>
                <TextMessage isLocalParticipant={isLocalParticipant}>
                  {message}
                </TextMessage>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChatMessage;
