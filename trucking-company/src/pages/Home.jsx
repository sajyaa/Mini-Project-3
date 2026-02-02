import { Box, Grid, Typography, Paper } from "@mui/material";
import fleetImage from "../assets/fleet.jpg";
import truckImage from "../assets/truck.jpg"; 

function Home() {
  return (
<Box sx={{ padding: 1, backgroundColor: "background.default", minHeight: "100vh" }}>
      {/* About + Image */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 15, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              NextStop Transport
            </Typography>
            <Typography>
              NextStop Transport provides reliable freight and logistics
              services across state lines with a focus on safety, efficiency,
              and compliance.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={20} md={6}>
        <Paper
  sx={{
    height: 350,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  <img
    src={fleetImage}
    alt="Fleet"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", 
    }}
  />
</Paper>
        </Grid>
      </Grid>

      {/* Image + Services */}
      <Grid container spacing={1} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={6}>
   <Grid item xs={12} md={6}>
  <Paper
    sx={{
      height: 350,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <img
      src={truckImage}
      alt="Truck"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover", 
        display: "block", 
      }}
    />
  </Paper>
</Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 1, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Services Provided
            </Typography>
            <Typography>
              • Freight Transportation <br />
              • Dispatch Services <br />
              • Long-Haul & Regional Routes <br />
              • DOT-Compliant Operations
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;