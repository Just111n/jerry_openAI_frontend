import { grey } from "@mui/material/colors";

export const getColorsFromMode = (mode: string) => ({
  ...(mode === "dark"
    ? {
        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#F7F7F9",
          500: "#f1f1f1",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },

        grey: {
          100: grey[900],
          200: grey[800],
          300: grey[700],
          400: grey[600],
          500: grey[500],
          600: grey[400],
          700: grey[300],
          800: grey[200],
          900: grey[100],
        },
        black: {
          100: grey[900],
          200: grey[800],
          300: grey[700],
          400: grey[600],
          500: grey[500],
          600: grey[400],
          700: grey[300],
          800: grey[200],
          900: grey[100],
        },
        // Define other colors (like greenAccent, redAccent, blueAccent) here for dark mode
      }
    : {
        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#666666",
          500: "#ffffff",
          600: "#f1f1f1",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },

        grey: {
          100: grey[100],
          200: grey[200],
          300: grey[300],
          400: grey[400],
          500: grey[500],
          600: grey[600],
          700: grey[700],
          800: grey[800],
          900: grey[900],
        },
        black: {
          100: grey[100],
          200: grey[200],
          300: grey[300],
          400: grey[400],
          500: grey[500],
          600: grey[600],
          700: grey[700],
          800: grey[800],
          900: grey[900],
        },
        // Define other colors (like greenAccent, redAccent, blueAccent) here for light mode
      }),
});
