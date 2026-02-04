
# ### Mini Project 3- Trucking Company Backend 


# ### Overview- Planning

This project focuses on backend functionality; a front-end interface is not required. Application behavior is demonstrated using Swagger UI. 

### Functional Requirements

The system must allow a user to:

-Posts Data
-View all stored posts
-View one post by its MongoDB ID
-Create a new post
-Update an existing post
-Delete an existing post


Demonstrate all API functions using Swagger UI. 

External API Used
-JSONPlaceholder Posts API
https://jsonplaceholder.typicode.com/posts

Database Type
-MongoDB (NoSQL document database)

Collection
- posts

Post Structure (Schema)

Each post in MongoDB reflects the structure of the external JSONPlaceholder API response.

| Field  | Type  | Description |
| userid |number | author      |

The project follows MVC architecture:
- models/Post.js
Defines the MongoDB schema for post documents.

Controller
- controllers/postController.js
Implements business logic and connects API endpoints to database operations.

Routes
- routes/postRoutes.js
Defines endpoints and maps them to controller functions.

Service Layer
- services/apiService.js
Handles communication with the external API (JSONPlaceholder) and seeds database.

API Endpoints (CRUD)

Base URL

http://localhost:5001

Operation: Create, Read All, Read One, Update, Delete 
Method: POST, GET, PUT, DELETE


The application is demonstrated using Swagger UI.

Swagger documentation is available at:

http://localhost:5001/api-docs

The Swagger page displays all CRUD operations on one screen and allows running requests directly from the UI, 


# Installation and Setup

*Clone repo from github*
git clone <repo>
cd trucking-company

*Install Backend Dependencies*
cd server
npm install

*Configure Environment Variables*
-Port 5001 is used to avoid macOS services sometimes blocking port 5000.
Create the file:
server/.env

With the following contents:
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/trucking_company

*Ensure MongoDB is running*
mongod

*Run the application from the server:*
node index.js

*Once the server is running, open Swagger UI:*

http://localhost:5001/api-docs