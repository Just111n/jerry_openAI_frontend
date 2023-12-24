import { Avatar, Typography, Box } from "@mui/material";
import TextMessage from "./TextMessage";
import TextMessageSkeleton from "./TextMessageSkeleton";

const ChatMessage = ({
  isLocalParticipant = false,
  isFirstMessageOfTheDay = false,
  message = "",
  showTime = false,
  showAvatar = true,
  time = "",
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
            {showAvatar ? (
              <Avatar
                src={
                  isLocalParticipant
                    ? "/static/images/avatar/1.jpg"
                    : `../../../vite.svg`
                }
                alt={isLocalParticipant ? "email" : "Saola"}
                sx={{ width: "30px", height: "30px" }}
              />
            ) : (
              <div style={{ width: "30px", height: "30px" }} />
            )}
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
            {showTime && (
              <Typography
                variant="body2"
                color={"#A5B6BF"}
                sx={{ paddingTop: 0.5 }}
              >
                {time}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      {isFirstMessageOfTheDay && !isSkeleton && (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            17/07/23
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ChatMessage;
