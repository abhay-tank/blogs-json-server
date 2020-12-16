const express = require("express");
const {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlogById,
	deleteBlogById,
} = require("../controllers/blogsController");
const checkBlogId = require("../middlewares/checkBlogId");
const validateRequestBody = require("../middlewares/validateRequestBody");
const blogsRouter = express.Router();

blogsRouter.route("/").get(getAllBlogs).post(validateRequestBody, createBlog);
let idRoute = blogsRouter.route("/:id");
idRoute
	.get(checkBlogId, getBlogById)
	.patch(checkBlogId, validateRequestBody, updateBlogById);

// DELETE BLOG BY ID IS OPTIONAL
idRoute.delete(checkBlogId, deleteBlogById);

module.exports = blogsRouter;
