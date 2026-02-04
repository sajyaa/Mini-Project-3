import { Box, Grid, Paper, Typography } from "@mui/material";

const vehicles = [
  { id: 1, name: "Truck A", type: "Long-Haul" },
  { id: 2, name: "Truck B", type: "Regional" },
  { id: 3, name: "Truck C", type: "Heavy-Duty" },
  { id: 4, name: "Truck D", type: "Refrigerated" },
];

function Fleet() {
  return (
    <Box sx={{ p: 3, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Our Fleet
      </Typography>
      <Grid container spacing={2}>
        {vehicles.map(vehicle => (
          <Grid item xs={12} md={6} key={vehicle.id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{vehicle.name}</Typography>
              <Typography>Type: {vehicle.type}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Fleet;