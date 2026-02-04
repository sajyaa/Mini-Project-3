
// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NextStop Transport API",
      version: "1.0.0",
      description: "CRUD API using MVC + MongoDB + JSONPlaceholder seeding"
    },
    servers: [{ url: "http://localhost:5001" }]
  },
  apis: [__dirname + "/../routes/*.js"],
};

module.exports = swaggerJsdoc(options);