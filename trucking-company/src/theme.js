import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2481b3ff", // dark blue for Navbar, buttons
    },
    secondary: {
      main: "#2c83a0ff", //  accent color
    },
    background: {
      default: "#c6eaf4ff", // light gray background
      paper: "#b5e7f3ff",   // white paper (Cards, Paper)
    },
    text: {
      primary: "#111827", // dark text
      secondary: "#4B5563", // gray text
    },
  },
  typography: {
    fontFamily: "'Georgia', serif",
    h4: {
      fontWeight: 700,
      marginBottom: "16px",
    },
    h5: {
      fontWeight: 600,
      marginBottom: "12px",
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export default theme;