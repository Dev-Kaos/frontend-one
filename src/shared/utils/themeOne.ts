import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  // No custom tokens found, you can skip the theme augmentation.
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#faf5ff",
          "100": "#f3e8ff",
          "200": "#e9d5ff",
          "300": "#d8b4fe",
          "400": "#c084fc",
          "500": "#a855f7",
          "600": "#9333ea",
          "700": "#7e22ce",
          "800": "#6b21a8",
          "900": "#581c87",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          "50": "#faf5ff",
          "100": "#f3e8ff",
          "200": "#e9d5ff",
          "300": "#d8b4fe",
          "400": "#c084fc",
          "500": "#a855f7",
          "600": "#9333ea",
          "700": "#7e22ce",
          "800": "#6b21a8",
          "900": "#581c87",
        },
      },
    },
  },
});

export default theme;
