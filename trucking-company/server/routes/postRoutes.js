const express = require("express");
const controller = require("../controllers/postController");
const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: Returns a list of posts
 */
router.get("/", controller.getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a single post by MongoDB _id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns one post
 *       404:
 *         description: Post not found
 */
router.get("/:id", controller.getPostById);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *               id:
 *                 type: number
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created
 */
router.post("/", controller.createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update a post by MongoDB _id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Post updated
 *       404:
 *         description: Post not found
 */
router.put("/:id", controller.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post by MongoDB _id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted
 *       404:
 *         description: Post not found
 */
router.delete("/:id", controller.deletePost);

module.exports = router;