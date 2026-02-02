import { Box, Typography } from "@mui/material";

function Services() {
  return (
   <Box sx={{ padding: 4, backgroundColor: "background.default", minHeight: "80vh" }}>
      <Typography variant="h4" gutterBottom>
        Services
      </Typography>
      <Typography>
        We provide freight transportation, dispatch services, and
        DOT-compliant logistics solutions.
      </Typography>
    </Box>
  );
}

export default Services;