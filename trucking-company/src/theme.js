import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2481b3" },
    secondary: { main: "#2c83a0" },
    background: { default: "#c6eaf4", paper: "#b5e7f3" },
    text: { primary: "#111827", secondary: "#4B5563" }
  },
  typography: {
    fontFamily: "'Georgia', serif",
    h4: { fontWeight: 700, mb: 2 },
    h5: { fontWeight: 600, mb: 1.5 },
    body1: { lineHeight: 1.6 }
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8, textTransform: "none", padding: "8px 16px" } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 12, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" } } },
    MuiAppBar: { styleOverrides: { root: { boxShadow: "0 4px 12px rgba(0,0,0,0.1)" } } }
  }
});

export default theme;