const ErrorResponse = require("../Models/ErrorResponse");
const sendErrorResponse = require("./responses/sendErrorResponse");
const sendSuccessResponse = require("./responses/sendSuccessResponse");
const validateLinks = require("../helpers/validateLinks");
const validateRequestBody = (req, res, next) => {
	let validationArray = [
		"author",
		"title",
		"content",
		"imageURL",
		"relatedLinks",
	];
	let result;
	// Check if request is for CreateBlog
	if (!req.params.id) {
		result = validationArray.every((key) => {
			if (key == "relatedLinks") {
				return validateLinks(req.body[key]);
			} else {
				return req.body[key] && req.body[key].trim().length;
			}
		});
	} else {
		console.log("Inside patch validate request");
		// Check request body for updateBlog
		result = Object.keys(req.body).every((key) => {
			if (validationArray.includes(key)) {
				if (key == "relatedLinks") {
					return validateLinks(req.body[key]);
				} else {
					return req.body[key] && req.body[key].trim().length;
				}
			} else {
				return true;
			}
		});
	}
	if (!result) {
		return sendErrorResponse(
			new ErrorResponse(400, "Unsuccessful", "Invalid request body"),
			res
		);
	}
	next();
};

module.exports = validateRequestBody;
