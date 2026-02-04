
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// Navbar component for the trucking company website
function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h3" sx={{ flexGrow: 3, fontWeight: 500 }}>
          NextStop Transport
        </Typography>

        {["/", "/services", "/fleet", "/contact", "/posts"].map((path, i) => (
          <Button
            key={path}
            component={Link}
            to={path}
            sx={{
              color: "white",
              marginX: 1,
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              fontWeight: 800,
            }}
          >
            {["Home", "Services", "Fleet", "Contact"][i]}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;