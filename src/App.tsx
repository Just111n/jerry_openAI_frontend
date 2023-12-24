import "./App.css";
import { Box, CssBaseline, ThemeProvider, styled } from "@mui/material";
import { ColorModeContext } from "./theme/ColorModeContext";
import { useMode } from "./theme/useMode";
import { getColorsFromMode } from "./theme/getColorsFromMode";
import Navbar from "./components/Navbar";
import ChatRoom from "./components/ChatRoom";

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
