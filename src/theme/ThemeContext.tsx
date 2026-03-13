// import React, { createContext, useContext, useState, useMemo } from "react";
// import { createTheme, ThemeProvider} from "@mui/material/styles";
// import { COLORS as initialColors } from "../constants/colors";
// import { FONTS } from "../constants/fonts";

// interface ColorContextType {
//   mode: "light" | "dark";
//   setMainColor: (color: string) => void;
//   toggleMode: () => void; 
// }

// const ColorContext = createContext<ColorContextType | undefined>(undefined);

// export const useColorSettings = () => {
//   const context = useContext(ColorContext);
//   if (!context) throw new Error("useColorSettings must be used within AppThemeProvider");
//   return context;
// };

// export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [greenColor, setGreenColor] = useState(initialColors.green.main);
//   const [mode, setMode] = useState<"light" | "dark">("light");


//   const theme = useMemo(() => 
//     createTheme({
//       palette: {
//         mode,
//         primary: {
//           ...initialColors.green,
//           main: greenColor,
//         },
//         background: {
//           default: mode === "light" ? "#ffffff" : "#161c24",
//           paper: mode === "light" ? "#ffffff" : "#212b36",
//         },
//         text: {
//           primary: mode === "light" ? "#212b36" : "#ffffff",
//           secondary: "#637381",
//         },
//       },
//       typography: {
//         fontFamily: FONTS.primary,
//       },
//     }), [greenColor, mode]);

//   const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

//   return (
//     <ColorContext.Provider value={{ setMainColor: setGreenColor, toggleMode, mode }}>
//       <ThemeProvider theme={theme}>
//         {children}
//       </ThemeProvider>
//     </ColorContext.Provider>
//   );
// };
// import React, { createContext, useContext, useState, useMemo } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { COLORS as initialColors } from "../constants/colors";
// import { FONTS } from "../constants/fonts";

// const ColorContext = createContext({
//   setMainColor: (color: string) => {},
// });

// export const useColorSettings = () => useContext(ColorContext);

// export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [greenColor, setGreenColor] = useState(initialColors.green.main);

//   const theme = useMemo(() => 
//     createTheme({
//       palette: {
//         ...initialColors, 
//         green: {
//           ...initialColors.green,
//           main: greenColor, 
//         },
//       },

//       typography: {
//         fontFamily: FONTS.primary,
//       },
//     }), [greenColor]);

//   return (
//     <ColorContext.Provider value={{ setMainColor: setGreenColor }}>
//       <ThemeProvider theme={theme}>
//         {children}
//       </ThemeProvider>
//     </ColorContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import type { ColorContextType } from "../Types";



const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColorSettings = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error("useColorSettings must be used within AppThemeProvider");
  return context;
};

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dynamicGreen, setDynamicGreen] = useState(COLORS.green);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        primary: COLORS.primary,
        black: COLORS.black,
        white: COLORS.white,
        neutral: COLORS.neutral,
        red: COLORS.red,
        orange: COLORS.orange,
        yellow: COLORS.yellow,
        workspace: COLORS.workspace,
        blur: COLORS.blur,
        green: {
          light: dynamicGreen.light,
          main: dynamicGreen.main,
          dark: dynamicGreen.dark,
        },
        background: {
          default: mode === "light" ? COLORS.white.main : "#141A21",
          blurBackground: mode === "light" ? "blur.main" : "#141A21",
          SidebarBorder: mode === "light" ? " #ebeaea" : " #919eab1f",
          buttonHover: mode === "light" ? " #eeeeee" : " #28323D",
          whiteBlack: mode === "light" ? " #1C252E" : " #ffff",
          listColor: mode === "light" ? " #ffff" : " #1C252E",
          TableRowColor: mode === "light" ? " #F4F6F8" : " #283542",
          ViewPaperColor: mode === "light" ? " #f8f8f8" : " #1C252E",
          notificationbg: mode === "light" ? " #eeecec" : " #141A21",
          notificationHover: mode === "light" ? "#d3d3d3" : " #28323D",
          logoutButtonColor: mode === "light" ? "#B71D18" : " #FFAC82",
          logoutButtonbg: mode === "light" ? "#fdb6a680" : " #ce6a5480",
          signininputbg: mode === "light" ? "#f3f6fb" : " #1C252E",
        },
        text: {
          primary: mode === "light" ? "#141A21" : "#ffffff",
          secondary: "#637381",
        },

      },
      typography: {
        fontFamily: FONTS.primary,
      },
    }), [dynamicGreen, mode]);

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ColorContext.Provider value={{ setMainColor: setDynamicGreen, toggleMode, mode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorContext.Provider>
  );
};