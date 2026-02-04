import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", message: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else setStatus("error");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      {status === "success" && <Alert severity="success" sx={{ mb: 2 }}>Message sent successfully!</Alert>}
      {status === "error" && <Alert severity="error" sx={{ mb: 2 }}>Failed to send message.</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
        <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
        <TextField label="Message" name="message" value={formData.message} onChange={handleChange} fullWidth multiline rows={4} sx={{ mb: 2 }} required />
        <Button type="submit" variant="contained" color="primary">Send Message</Button>
      </form>
    </Box>
  );
}

export default Contact;