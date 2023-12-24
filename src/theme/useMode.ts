import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getColorsFromMode } from "./getColorsFromMode";
import { DARK, LIGHT } from "../constants/common-constants";

export const useMode = () => {
  const [mode, setMode] = useState(LIGHT);
  const colors = getColorsFromMode(mode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT)),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as PaletteMode | undefined,
          ...colors,
          ...(mode === LIGHT
            ? {
                // template for if need to change default settings in the future
                // palette values for light mode
                // primary: amber,
                // divider: amber[200],
                // text: {
                // primary: grey[900],
                // secondary: grey[800],
                // },
              }
            : {
                // palette values for dark mode
                // primary: deepOrange,
                // divider: deepOrange[700],
                // background: {
                // default: deepOrange[900],
                // paper: deepOrange[900],
                // },
                // text: {
                // primary: "#fff",
                // secondary: grey[500],
                // },
              }),
        },
      }),
    [colors, mode]
  );

  return { theme, colorMode };
};
