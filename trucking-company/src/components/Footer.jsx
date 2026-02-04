import { Box, Typography } from "@mui/material";
// Footer component for the trucking company website
function Footer() {
  return (
    <Box sx={{ textAlign: "center", padding: 3, marginTop: 6, backgroundColor: "primary.main", color: "white" }}>
      <Typography variant="body2">
        © 2026 NextStop Transport LLC. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;