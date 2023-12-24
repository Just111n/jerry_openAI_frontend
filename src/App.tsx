import "./App.css";
import {
  Box,
  CssBaseline,
  Divider,
  Paper,
  ThemeProvider,
  styled,
} from "@mui/material";
import { ColorModeContext } from "./theme/ColorModeContext";
import { useMode } from "./theme/useMode";
import { getColorsFromMode } from "./theme/getColorsFromMode";
import StopIcon from "@mui/icons-material/Stop";
import ChatRoomInput from "./components/ChatRoomInput";
import Navbar from "./components/NavBar";

const initialOptions = {
  llmModel: "GPT-3.5",
  webAccess: false,
  temperatureValue: "0.7",
};

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
      {/* <ChatRoomHeader /> */}
      <Divider />
      {/* <ChatRoomMessages /> */}
      <ChatRoomInput />
    </StyledPaper>
  );
};

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  padding: theme.spacing(2),
  boxSizing: "border-box",
  height: "100%",
  overflow: "hidden",
}));

function App() {
  const { theme, colorMode } = useMode();
  const colors = getColorsFromMode(theme.palette.mode);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

        <Box
          sx={{
            background: colors.grey[200],
            height: "calc(100vh - 64px)",
            display: "flex",
          }}
        >
          <MainBox>
            <ChatRoom />
          </MainBox>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
