import { Box, Typography } from "@mui/material";

function Contact() {
  return (
  <Box sx={{ padding: 4, backgroundColor: "background.default", minHeight: "80vh" }}>
  <Typography variant="h4" color="text.primary" gutterBottom>
    Contact Us
  </Typography>
  <Typography color="text.secondary">
    Get in touch with us for quotes or general inquiries.
  </Typography>
</Box>
  );
}

export default Contact;