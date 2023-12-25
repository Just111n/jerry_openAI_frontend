import { Stack, Typography, styled, IconButton, useTheme } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { blue } from "@mui/material/colors";
import { getColorsFromMode } from "../../../theme/getColorsFromMode";

const StyledStack = styled(Stack)({
  padding: "12px 16px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  borderBottomRightRadius: "12px",
  display: "inline-flex",
  flexDirection: "column",
  maxWidth: "87%",
  spacing: 2,
});

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: blue[500],
  color: "white",

  "&:hover": {
    backgroundColor: blue[800],
  },
}));

const TextMessage = ({ isLocalParticipant, children }) => {
  const theme = useTheme();
  const colors = getColorsFromMode(theme.palette.mode);
  const handleCopyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <StyledStack
      spacing={1}
      sx={{
        backgroundColor: isLocalParticipant ? colors.grey[200] : "primary.main",
      }}
    >
      <Typography
        sx={{
          color: isLocalParticipant ? "inherit" : "white ",
          wordBreak: "break-word", // This will ensure words can break and wrap onto the next line.
          overflowWrap: "break-word", // This will break long words that exceed the width of the container.
          whiteSpace: "normal", // Ensure white space is treated normally.
        }}
      >
        {children}
      </Typography>

      {!isLocalParticipant && (
        <Stack direction="row" spacing={1} alignSelf="end">
          <StyledIconButton
            edge="end"
            aria-label="copy"
            onClick={() => handleCopyTextToClipboard(children)}
          >
            <ContentCopyIcon />
          </StyledIconButton>
          <StyledIconButton
            edge="end"
            aria-label="delete"
            onClick={() => console.log("like is clicked!")}
          >
            <ThumbUpOutlinedIcon />
          </StyledIconButton>
          <StyledIconButton
            edge="end"
            aria-label="delete"
            onClick={() => console.log("dislike is clicked!")}
          >
            <ThumbDownOutlinedIcon />
          </StyledIconButton>
        </Stack>
      )}
    </StyledStack>
  );
};

export default TextMessage;
