import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

function Fleet() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 6 }}>
        <CircularProgress />
        <Typography sx={{ marginTop: 2 }}>
          Loading fleet data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "background.default", minHeight: "80vh" }}>
      <Typography variant="h4" color="text.primary" gutterBottom>
        Our Fleet & Drivers
      </Typography>

      <Grid container spacing={3}>
        {drivers.map((driver) => (
          <Grid item xs={12} md={4} key={driver.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {driver.name}
                </Typography>

                <Typography variant="body2">
                  Email: {driver.email}
                </Typography>

                <Typography variant="body2">
                  Phone: {driver.phone}
                </Typography>

                <Typography variant="body2">
                  City: {driver.address.city}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Fleet;