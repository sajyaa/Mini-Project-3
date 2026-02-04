const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

require("dotenv").config({ path: __dirname + "/.env" });

const postRoutes = require("./routes/postRoutes");
const fetchAndSeedPosts = require("./services/apiService");

const app = express();
app.use(cors());
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working" });
});

// Posts API
app.use("/api/posts", postRoutes);

// Mongo connect + seed
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await fetchAndSeedPosts();
  })
  .catch((err) => console.error(" MongoDB error:", err.message));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));