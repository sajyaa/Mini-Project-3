

const axios = require("axios");
const Post = require("../models/Post");

// Fetch posts from external API and seed into MongoDB
async function fetchAndSeedPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    const count = await Post.countDocuments();
    if (count > 0) {
      console.log(" Posts already exist in DB. Seeding skipped.");
      return;
    }

    await Post.insertMany(response.data);
    console.log(" Posts fetched from JSONPlaceholder and saved to MongoDB");
  } catch (error) {
    console.error("Failed to fetch external API:", error.message);
  }
}

module.exports = fetchAndSeedPosts;