const ErrorResponse = require("../Models/ErrorResponse");
const sendErrorResponse = require("./responses/sendErrorResponse");
const validateLinks = require("../helpers/validateLinks");

const validateRequestBody = (req, res, next) => {
	let validationArray = ["author", "title", "content", "imageURL"];
	let result;
	// Check if request is for CreateBlog
	if (!req.params.id) {
		result = validationArray.every((key) => {
			return req.body[key] && req.body[key].trim().length;
		});
		if (req.body.relatedLinks) {
			result = validateLinks(req.body[key]) && result;
		}
	} else {
		// Check request body for updateBlog**
		result = Object.keys(req.body).every((key) => {
			// Validate common keys in validationArray and request body
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
