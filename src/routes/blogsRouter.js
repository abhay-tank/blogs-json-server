const express = require("express");
const {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlogById,
	deleteBlogById,
} = require("../controllers/blogsController");
const blogsRouter = express.Router();

blogsRouter.route("/").get(getAllBlogs).post(createBlog);
let idRoute = blogsRouter.route("/:id");
idRoute.get(getBlogById).patch(updateBlogById);

// DELETE BLOG BY ID IS OPTIONAL
// idRoute.delete(deleteBlogById);

module.exports = blogsRouter;
