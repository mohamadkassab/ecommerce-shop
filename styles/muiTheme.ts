"use client";
import { colors } from "@mui/material";
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

export const GLOBALRADIUS = "8px";

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
  }
}

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
      dark: '#1B86C1',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#737373',
      dark: '#252B42',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
    },
    error: {
      main: '#F44336',
    },
    tertiary: {
      main: '#23856D',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#FFC107',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      disabled: '#BDBDBD',
    },
    action: {
      active: "#737373", 
      // hover: "inherit", 
      selected: "#ffffff",
      disabled: "#BDBDBD", 
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.125rem",
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: "0.015em",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0.015em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0.015em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      textTransform: "uppercase", 
      fontWeight: 700,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: GLOBALRADIUS,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: GLOBALRADIUS,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: GLOBALRADIUS,
          "& .MuiInputBase-root": {
            borderRadius: GLOBALRADIUS,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color:"#737373",
          textDecoration: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#F9FAFB",
            color:"#23A6F0",
            fontWeight: "bold",
            "& .MuiLink-root": {
              color:"#23A6F0",
              fontWeight: "bold",
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: GLOBALRADIUS,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1280px)': {
            maxWidth: '1560px',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#737373",
          "&.Mui-checked": {
            color:"#23A6F0",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: GLOBALRADIUS,
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: GLOBALRADIUS,
          padding: "24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor:  "#737373",
          fontFamily: "Roboto, Arial, sans-serif",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        "*": {
          boxSizing: "inherit",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },

  spacing: 8, 

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  direction: "ltr", 
});

export default muiTheme;