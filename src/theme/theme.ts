import { createTheme } from "@mui/material/styles";


declare module "@mui/material/styles" {
  interface PaletteOptions {
    neutral?: {
      light: string;
      main: string;
      dark: string;
    };
    danger?: {
      main: string;
    };
    black?: {
      main: string;
      gray: string;
    };
    white?: {
      main: string;
    };
    blur?: {
      main: string;
    };
    green?: {
      main: string;
    };
    yellow?: {
      main: string;
    };
    orange?: {
      main: string;
      light: string;
    };
    red?: {
      light: string;
      medium: string;
      dark: string;
      extralight: string;
    };
    workspace?: {
      free: string;
      pro: string;
      proText: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00B8D9",
      light: "#637381",
    },
    black: {
      gray: "#1C252E",
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
 
    neutral: {
      light: "#F4F6F8",
      main: "#8697A7",
      dark: "#EDEFF1",
    },

    red: {
      light: "#ebebeb",
      medium: "#E0E0E0",
      dark: "#B71D18",
      extralight: "#fccccc",
    },

    orange: {
      main: "#FF5630",
      light: "#fdb6a680",
    },

    blur: {
      main: "#ffffffcc",
    },

    green: {
      main: "#00A76F",
    },
    yellow: {
      main: "#FFAB00",
    },


    workspace: {
      free: "#eceff3",
      pro: "#d8edf7",
      proText: "#006C9C",
    },
  },
});