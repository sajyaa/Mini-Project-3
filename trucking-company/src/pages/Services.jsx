import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const services = [
  { title: "Freight Transportation", desc: "Reliable freight across states with safety and efficiency." },
  { title: "Dispatch Services", desc: "Efficient scheduling and dispatch for all shipments." },
  { title: "Long-Haul & Regional Routes", desc: "Optimized routes to reduce cost and time." },
  { title: "DOT-Compliant Operations", desc: "Full compliance with all Department of Transportation regulations." },
];

function Services() {
  return (
    <Box sx={{ padding: 3, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      {services.map((service, idx) => (
        <Accordion key={idx}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{service.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{service.desc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default Services;