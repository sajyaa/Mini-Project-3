import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <AppBar position="static" color="primary">
  <Toolbar>
    <Typography variant="h3" sx={{ flexGrow: 3, fontWeight: 500 }}>
      NextStop Transport
    </Typography>
      <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              marginX: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              fontWeight: 800,
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/services"
            sx={{
              color: "white",
              marginX: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              fontWeight: 800,
            }}
          >
            Services
          </Button>
          <Button
            component={Link}
            to="/fleet"
            sx={{
              color: "white",
              marginX: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              fontWeight: 800,
            }}
          >
            Fleet
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: "white",
              marginX: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              fontWeight: 800,
            }}
          >
            Contact
          </Button>
  </Toolbar>
</AppBar>
  );
}

export default Navbar;