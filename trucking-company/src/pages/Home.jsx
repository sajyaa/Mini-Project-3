import { Box, Grid, Typography, Paper } from "@mui/material";
import fleetImage from "../assets/fleet.jpg";
import truckImage from "../assets/truck.jpg";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ p: 3, bgcolor: "background.default", minHeight: "100vh" }}>
      {/* About + Fleet Image */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: "100%" }}>
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
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: 350, overflow: "hidden" }}>
            <img
              src={fleetImage}
              alt="Fleet"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Truck Image + Services */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: 350, overflow: "hidden" }}>
            <img
              src={truckImage}
              alt="Truck"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
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

      {/* Latest Posts */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Latest Posts
        </Typography>
        {loading ? (
          <Typography>Loading posts...</Typography>
        ) : (
          <Grid container spacing={2}>
            {posts.slice(0, 5).map(post => (
              <Grid item xs={12} md={6} key={post.id}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography>{post.body}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default Home;