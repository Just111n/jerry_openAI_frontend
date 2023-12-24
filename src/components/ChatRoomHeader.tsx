import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1),
  paddingRight: theme.spacing(2),
  boxSizing: "border-box",
}));

function ChatRoomHeader() {
  const [isStarred, setIsStarred] = useState(false);

  const handleIconClick1 = () => {
    setIsStarred((prev) => !prev);
  };

  const handleIconClick2 = () => {
    console.log("icon 2 clicked");
  };

  const handleIconClick3 = () => {
    console.log("icon 3 clicked");
    handleLogOut();
  };

  const handleLogOut = () => {
    sessionStorage.clear();
  };

  const handleDelete = async (chatRoomId) => {};

  const handleDeleteClick = (event) => {};
  const chatRoomName = "New Chat";

  const time = "10:01 PM, 10/05/2023";

  return (
    <HeaderContainer>
      <Typography variant="h5" fontWeight={700} noWrap>
        {chatRoomName}
      </Typography>
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={1}
        divider={<Divider orientation="vertical" variant="middle" flexItem />}
      >
        <IconButton aria-label="star" onClick={handleIconClick1}>
          <StarIcon sx={{ color: isStarred ? "#E8C356" : "default" }} />
        </IconButton>
        <IconButton aria-label="options" onClick={handleIconClick2}>
          <MoreVertOutlinedIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={handleIconClick3}>
          <BorderColorOutlinedIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteClick}>
          <DeleteOutlinedIcon />
        </IconButton>
        <Typography noWrap>{time}</Typography>
      </Stack>
    </HeaderContainer>
  );
}

export default ChatRoomHeader;
