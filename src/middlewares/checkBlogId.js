let { db } = require("../controllers/blogsController");
const ErrorResponse = require("../Models/ErrorResponse");
const sendErrorResponse = require("./responses/sendErrorResponse");
const checkBlogId = (req, res, next) => {
	const blogIndex = db.findIndex((blog) => blog.id == req.params.id);
	const currentBlog = db[blogIndex];
	if (!currentBlog) {
		return sendErrorResponse(
			new ErrorResponse(404, "Unsuccessful", "Blog not found"),
			res
		);
	}
	req.currentBlog = currentBlog;
	req.currentBlogIndex = blogIndex;
	next();
};

module.exports = checkBlogId;
