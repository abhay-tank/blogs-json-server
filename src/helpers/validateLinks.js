const validateLinks = (links) => {
	let linkValidationArray = ["id", "title"];
	if (links.length > 0) {
		return links.every((link) =>
			linkValidationArray.every((key) => link[key] && link[key].trim().length)
		);
	} else {
		return false;
	}
};

module.exports = validateLinks;
