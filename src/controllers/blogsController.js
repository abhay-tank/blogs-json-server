const fs = require("fs");
const path = require("path");
const ErrorResponse = require("../Models/ErrorResponse");
const sendErrorResponse = require("../middlewares/responses/sendErrorResponse");
const sendSuccessResponse = require("../middlewares/responses/sendSuccessResponse");
const Blog = require("../Models/Blog");
const BlogLink = require("../Models/BlogLink");
const dataSource = path.join(__dirname, "..", "data", "blogs.json");
let db = JSON.parse(fs.readFileSync(dataSource, { encoding: "utf-8" }));
// GET
const getAllBlogs = (req, res) => {
	if (req.query.limit) {
		let limit = parseInt(req.query.limit);
		if (!isNaN(limit) && limit > 0 && limit < db.length) {
			return sendSuccessResponse(
				200,
				"Successful",
				db.slice(0, req.query.limit),
				res
			);
		} else {
			return sendErrorResponse(
				new ErrorResponse(
					400,
					"UnSuccessful",
					"Invalid limit or limit format or limit exceeding"
				),
				res
			);
		}
	}
	let limit = parseInt(req.query.limit);
	return sendSuccessResponse(200, "Successful", db, res);
};
// POST
const createBlog = (req, res) => {
	let relatedLinks = [];
	req.body.relatedLinks.forEach((link) =>
		relatedLinks.push(new BlogLink(link.id, link.title))
	);
	let newBlog = new Blog(
		req.body.author,
		req.body.title,
		req.body.content,
		req.body.imageURL,
		relatedLinks
	);
	db.push(newBlog);
	fs.writeFile(dataSource, JSON.stringify(db, null, 2), (err) => {
		if (err) {
			return sendErrorResponse(
				new ErrorResponse(500, "Unsuccessful", "Problem saving user"),
				res
			);
		}
		sendSuccessResponse(200, "Successful", newBlog, res);
	});
};
// GET /:id
const getBlogById = (req, res) => {};
// PATCH /:id
const updateBlogById = (req, res) => {};
// DELETE /:id
const deleteBlogById = (req, res) => {};

module.exports = {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlogById,
	deleteBlogById,
};
